import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Career } from './career/career';
import { Education } from './education/education';
import { Hobbies } from './hobbies/hobbies';
import { Blog } from './blog/blog';

export const routes: Routes = [
  {
    path: '',
    title: 'Brayden Jonsson - Home',
    component: Home,
  },
  {
    path: 'home',
    title: 'Brayden Jonsson - Home',
    component: Home,
  },
  {
    path: 'career',
    title: 'Brayden Jonsson - Career',
    component: Career,
  },
  {
    path: 'education',
    title: 'Brayden Jonsson - Education',
    component: Education,
  },
  {
    path: 'hobbies',
    title: 'Brayden Jonsson - Hobbies',
    component: Hobbies,
  },
  {
    path: 'blog',
    title: 'Brayden Jonsson - Blog',
    component: Blog,
  },
];
