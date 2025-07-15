import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { AboutComponent } from './header/about/about.component';
import { SkillsComponent } from './header/skills/skills.component';
import { ProjectsComponent } from './header/projects/projects.component';
import { ContactComponent } from './header/contact/contact.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full' 
  },
  {
    path: 'header',
    component: HeaderComponent,
    title: 'header'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us '
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Skills'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'contact me'
  },
  {
    path: 'footer',
    component: FooterComponent,
    title: 'footer'
  }
];