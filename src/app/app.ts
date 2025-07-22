import { Component } from '@angular/core';
import { TopBarButton } from './common/top-bar-button/top-bar-button';
import { TopBar } from './common/top-bar/top-bar';

@Component({
  selector: 'app-root',
  imports: [TopBar],
  templateUrl: './app.html',
})
export class App {
  protected title = 'portfolio-site';
}
