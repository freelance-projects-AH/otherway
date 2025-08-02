import { NgIf } from '@angular/common';
import { Component, Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() mediaType: 'video' | 'image' = 'image';
  @Input() src = '';
  @Input() title = '';
  @Input() description = '';
   @Output() cardClick = new EventEmitter<void>();
    onCardClick() {
    this.cardClick.emit();
  }
}
