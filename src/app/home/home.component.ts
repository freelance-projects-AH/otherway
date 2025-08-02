import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SelectedWorkComponent } from '../selected-work/selected-work.component';
import { HareComponent } from '../hare/hare.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { FormComponent } from '../form/form.component';
import { ScrollCardsComponent } from '../scroll-cards/scroll-cards.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,HareComponent,SelectedWorkComponent,CarouselComponent,FormComponent,ScrollCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 cards = [
    { title: 'Card 1', content: 'Content for card 1' },
    { title: 'Card 2', content: 'Content for card 2' },
    { title: 'Card 3', content: 'Content for card 3' },
    { title: 'Card 4', content: 'Content for card 4' },
    { title: 'Card 5', content: 'Content for card 5' },
    { title: 'Card 6', content: 'Content for card 6' },
    { title: 'Card 7', content: 'Content for card 7' },
    { title: 'Card 8', content: 'Content for card 8' },
    { title: 'Card 9', content: 'Content for card 9' },
  ];
}
