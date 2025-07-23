import { Component, Input } from '@angular/core';
import { TopBarButton } from '../top-bar-button/top-bar-button';

@Component({
  selector: 'top-bar',
  imports: [TopBarButton],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.css',
})
export class TopBar {
  @Input() page: 'Home' | 'Career' | 'Education' | 'Hobbies' | 'Blog' | 'None' =
    'Home';
}
