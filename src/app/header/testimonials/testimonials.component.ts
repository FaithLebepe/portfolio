import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [NgFor],
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
 testimonials = [
  {
    name: 'Migal Lewis',
    title: 'Software Engineer and Mentor',
    image: 'assets/Faith.jpg',
    message: 'What impresses me most is Faith’s technical ability, research skills, discipline, and strong work ethic. For a junior developer, she shows exceptional potential. Having mentored many aspiring developers, I can confidently say that Faith stands out. She has the rare ability to self-reflect, take feedback constructively, and use it to improve, all qualities of someone on the path to becoming not just good, but great in this field.'
  },
  {
    name: 'Tanaka Madondo',
    title: 'Software Developer and Mentor',
    image: 'assets/Faith.jpg',
    message: 'Over the past year, I’ve had the pleasure of watching Faith grow tremendously in both skill and confidence. What stands out most to me is her initiative, she took it upon herself to start a project with someone who had a vision, and for a young developer, that kind of bravery and ownership speaks volumes about her mindset and direction.'
  },
  {
    name: 'Livhuwani M',
    title: 'Quality Engineer',
    image: 'assets/Faith.jpg',
    message: 'Working with Faith has been a great experience. She`s quick to learn, ask the right questions, and consistently deliver quality work. Her positive attitude and willingness to take feedback onboard makes her a valuable part of a team. I’m confident she’ll thrive in any development environment.'
  },
  {
    name: 'James L',
    title: 'Software developer',
    image: 'assets/Faith.jpg',
    message: 'Though naturally introverted  ( a trait that often suits our field ) she’s pushed herself out of her comfort zone on several occasions. While presenting and demoing are still areas she’s developing, I have no doubt she will grow into them. I`ve already seen signs of her willingness to improve and challenge herself, which is a strong indicator that she`ll eventually overcome her stage fright and become a confident presenter.'
  },
  {
    name: 'Precious Mhlongo',
    title: 'Client',
    image: 'assets/Faith.jpg',
    message: 'I truly believe Faith has what it takes to build a successful and meaningful career as a developer.'
  }
];

}
