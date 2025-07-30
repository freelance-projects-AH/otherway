import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SelectedWorkComponent } from '../selected-work/selected-work.component';
import { HareComponent } from '../hare/hare.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,HareComponent,SelectedWorkComponent,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
