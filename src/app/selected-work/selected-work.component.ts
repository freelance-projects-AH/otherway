import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-selected-work',
  imports: [ProjectCardComponent,RouterModule],
  templateUrl: './selected-work.component.html',
  styleUrl: './selected-work.component.css'
})
export class SelectedWorkComponent {

}
