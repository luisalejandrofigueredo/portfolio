import { Routes } from '@angular/router';
import { DegreesComponent } from './degrees/degrees.component';
import {ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills/skills.component';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'degrees', component: DegreesComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
];
