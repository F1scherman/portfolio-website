import { Component, Input } from '@angular/core';
import { TopBarButton } from '../top-bar-button/top-bar-button';

export type Pages =
  | 'Home'
  | 'Career'
  | 'Education'
  | 'Hobbies'
  | 'Blog'
  | 'None';

@Component({
  selector: 'page',
  imports: [TopBarButton],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {
  @Input() page: Pages = 'None';
}
