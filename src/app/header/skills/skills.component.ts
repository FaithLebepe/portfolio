import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  ngAfterViewInit(): void {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });

  elements.forEach(el => observer.observe(el));
}


}
