import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { WhatsAppComponent } from "./whats-app/whats-app.component";
import { FooterComponent } from "./footer/footer.component";
import { ThemeToggleService } from './theme-toggle.service';
import { HttpClientModule } from '@angular/common/http';
import { HareComponent } from './hare/hare.component';
import { SelectedWorkComponent } from './selected-work/selected-work.component';
import { NavbarComponent2 } from './sheard/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { NavbarVisibilityService } from './navbar-visibility.service';

@Component({
  selector: 'app-root',
  imports: [HareComponent,CommonModule,RouterOutlet, NavbarComponent, WhatsAppComponent, FooterComponent,HttpClientModule,NavbarComponent2],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real-estate';
   constructor(private themeService: ThemeToggleService,

    private navbarVisibilityService: NavbarVisibilityService
   ) {
  console.log('[AppComponent] ThemeToggleService injected');
  }
  
 showNavbar = true;

 

  ngOnInit() {
    this.navbarVisibilityService.navbarVisible$.subscribe(value => {
      this.showNavbar = value;
    });
  }

}
