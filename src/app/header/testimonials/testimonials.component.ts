import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [NgFor, NgIf],
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

  modalVisible = false;
  selectedTestimonial: { name: string; message: string } | null = null;

 testimonials = [
  {
    name: 'Migal Lewis',
    title: 'Senior Software Engineer',
    image: 'assets/profile.jpg',
    message: 'Over the past year, I’ve had the pleasure of watching Faith grow tremendously in both skill and confidence. What stands out most to me is her initiative, she took it upon herself to start a project with someone who had a vision, and for a young developer, that kind of bravery and ownership speaks volumes about her mindset and direction. Though naturally introverted  ( a trait that often suits our field ) she’s pushed herself out of her comfort zone on several occasions. While presenting and demoing are still areas she’s developing, I have no doubt she will grow into them. I`ve already seen signs of her willingness to improve and challenge herself, which is a strong indicator that she`ll eventually overcome her stage fright and become a confident presenter. What impresses me most is Faith’s technical ability, research skills, discipline, and strong work ethic. For a junior developer, she shows exceptional potential. Having mentored many aspiring developers, I can confidently say that Faith stands out. She has the rare ability to self-reflect, take feedback constructively, and use it to improve, all qualities of someone on the path to becoming not just good, but great in this field. I truly believe Faith has what it takes to build a successful and meaningful career as a developer.'
  },
  {
    name: 'Tanaka Madondo',
    title: 'Software Developer',
    image: 'assets/profile.jpg',
    message: 'I’ve had the pleasure of mentoring Faith for the past two years, starting when she was a first-year IT student, and it’s been amazing to watch her grow. From the start, she’s shown a real passion for software development and a strong drive to learn and improve. What stands out about Faith is her resilience and her willingness to take on challenges head-on. I supervised her on two projects, and she consistently delivered her work on time and with very little need for follow-up. She’s focused, disciplined, and always looking for ways to add value. On top of that, Faith is kind, humble, and really grounded. She’s someone who cares deeply about people, values family, and brings a quiet strength to any team she’s part of. I have no doubt she’s going to be a leader in the tech space in the soon.'
  },
  {
    name: 'James Lewis',
    title: 'Software developer',
    image: 'assets/profile.jpg',
    message: 'It has been a privilege to mentor Faith Lebepe on her journey as a software developer. In the short time I’ve worked with her, Faith has shown an exceptional willingness to learn and a genuine eagerness to grow. She actively seeks out knowledge, readily absorbs feedback, and consistently demonstrates initiative, particularly in her ability to research and solve problems independently. One of the most inspiring aspects of her development has been her growing confidence. From our first interaction to now, she’s gone from being hesitant to ask questions to engaging in discussions and presenting her ideas with better clarity. Faith has the mindset and work ethic of someone destined for a bright future in tech. I am genuinely proud of the progress she’s made, and I look forward to seeing the impact she’ll have in the industry in the years to come.'
  },
  {
    name: 'Livhuwani Nkuna',
    title: 'Quality Engineer',
    image: 'assets/profile.jpg',
    message: 'Working with Faith has been a great experience. She`s quick to learn, ask the right questions, and consistently deliver quality work. Her positive attitude and willingness to take feedback onboard makes her a valuable part of a team. I’m confident she’ll thrive in any development environment.'
  },
  {
    name: 'Precious Mhlongo',
    title: 'Client',
    image: 'assets/profile.jpg',
    message: 'Working with Faith has been an absolute pleasure. From the start, she understood exactly what I wanted for my meal prep business—something modern, clean, and user-friendly. She brought the entire vision to life with great attention to detail, from filtering meals by fitness goals to showcasing videos and allergen info. I especially loved how she made the website feel both professional and personal. Her communication, creativity, and technical skills were impressive throughout the project. I’m so proud of the progress site and excited to share it with customer'
  }
];

getPreview(message: string): string {
    return message.length > 200 ? message.slice(0, 200) + '...' : message;
  }

  openModal(t: { name: string; message: string }) {
    this.selectedTestimonial = t;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedTestimonial = null;
  }
}
