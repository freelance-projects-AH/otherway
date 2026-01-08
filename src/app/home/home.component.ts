import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SelectedWorkComponent } from '../selected-work/selected-work.component';
import { HareComponent } from '../hare/hare.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { FormComponent } from '../form/form.component';
import { IconsComponent } from '../icons/icons.component';
import { OurServiceComponent } from '../our-services/our-service/our-service.component';
import { HereServicesComponent } from "../here-services/here-services.component";

@Component({
  selector: 'app-home',
  standalone: true, // ✅ Add this line to make the component standalone
  imports: [NavbarComponent, HareComponent, SelectedWorkComponent, CarouselComponent, FormComponent, IconsComponent, OurServiceComponent, HereServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
