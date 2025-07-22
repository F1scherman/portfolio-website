import { Component } from '@angular/core';
import { TopBarButton } from '../top-bar-button/top-bar-button';

@Component({
  selector: 'top-bar',
  imports: [TopBarButton],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.css',
})
export class TopBar {
  public homeButtonClicked() {
    console.log('Home!');
  }
  public careerButtonClicked() {
    console.log('Career!');
  }
  public educationButtonClicked() {
    console.log('Education!');
  }
  public hobbiesButtonClicked() {
    console.log('Hobbies!');
  }
  public blogButtonClicked() {
    console.log('Blog!');
  }
}
