import { Component } from '@angular/core';
import { Page } from '../common/page/page';
import { BlogSection } from "../common/blog-section/blog-section";

@Component({
  selector: 'app-home',
  imports: [Page, BlogSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
