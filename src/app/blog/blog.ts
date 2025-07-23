import { Component } from '@angular/core';
import { TopBar } from '../common/top-bar/top-bar';

@Component({
  selector: 'app-blog',
  imports: [TopBar],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}
