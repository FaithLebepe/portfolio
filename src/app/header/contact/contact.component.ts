import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log(this.formData);
    alert('Message sent!');
    this.formData = { name: '', email: '', message: '' };
  }
}
