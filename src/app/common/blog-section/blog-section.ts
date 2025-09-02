import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-section',
  imports: [NgClass],
  templateUrl: './blog-section.html',
  styleUrl: './blog-section.css',
})
export class BlogSection {
  @Input({ required: true }) reversible!: boolean;
}
