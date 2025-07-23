import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'top-bar-button',
  imports: [RouterLink],
  templateUrl: './top-bar-button.html',
  styleUrl: './top-bar-button.css',
})
export class TopBarButton {
  @Input() text: string = '';
  @Input() selected: boolean = false;
  @Input() directory: string = '/';
}
