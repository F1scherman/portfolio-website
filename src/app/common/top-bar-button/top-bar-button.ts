import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'top-bar-button',
  imports: [],
  templateUrl: './top-bar-button.html',
  styleUrl: './top-bar-button.css',
})
export class TopBarButton {
  @Input() text: string = '';
  @Output() clicked = new EventEmitter<void>();
}
