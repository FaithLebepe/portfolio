import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";

import { OnInit } from '@angular/core';
import Typed from 'typed.js';
import { ServicesComponent } from "../services/services.component";
import { HeaderComponent } from "../header.component";
import { FooterComponent } from "../../footer/footer.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, ServicesComponent, HeaderComponent, FooterComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    var typed = new Typed(".text", {
      strings: ["Fullstack Developer", "Web Developer", "Mobile App Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  }
}
