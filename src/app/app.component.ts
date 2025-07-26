import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
    <div class="cursor-dot"></div>
<div class="cursor-outline"></div>

  `,
  styles: [`
  .cursor-dot,
.cursor-outline {
  position: fixed;
  pointer-events: none;
  border-radius: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
}

/* Inner dot */
.cursor-dot {
  width: 8px;
  height: 8px;
  background-color: #0ef; /* Light blue */
  transition: transform 0.1s ease;
}

/* Outer circle */
.cursor-outline {
  width: 30px;
  height: 30px;
  border: 2px solid #0ef;
  transition: transform 0.15s ease;
}

.cursor-dot,
.cursor-outline {
  will-change: transform;
}

.cursor-outline {
  transition: transform 0.15s ease-out;
}


    main {
      min-height: calc(100vh - 140px); 
    }
  `]
})
export class AppComponent {

  ngAfterViewInit() {
  const dot = document.querySelector('.cursor-dot') as HTMLElement;
  const outline = document.querySelector('.cursor-outline') as HTMLElement;

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  const speed = 0.2; // trailing speed (0 to 1)

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot follows instantly
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateCursor() {
    outlineX += (mouseX - outlineX) * speed;
    outlineY += (mouseY - outlineY) * speed;

    outline.style.left = `${outlineX}px`;
    outline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.9 }); 

  const sections = document.querySelectorAll('.animate-on-scroll');
  sections.forEach(section => observer.observe(section));
}



}