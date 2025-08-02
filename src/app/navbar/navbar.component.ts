import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import {
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  
})
export class NavbarComponent {
 isMobileMenuOpen = false;
  isPropertiesMenuOpen = false;
   @ViewChild('box', { static: false }) box!: ElementRef;
  @ViewChild('text', { static: false }) text!: ElementRef;

  // ... باقي الكود اللي عندك زي ما هو

  constructor(private renderer: Renderer2) {}
ngAfterViewInit(): void {
    const width = window.innerWidth;

    let boxEnd = -125;
    let textEnd = -160;
    let scrollBuffer = 60;

    if (width < 768) {
      boxEnd = 300;
      textEnd = -50;
      scrollBuffer =20
    } 

    const style = `
      @keyframes moveBox {
        0% { left: -125px; opacity: 0; }
        
  10% {
    opacity: 1;
  }
  90% {
    left: calc(80% - 60px);
    opacity: 1;
  }
  100% {
    left: calc(80% - 50px);
    opacity: 1;
  }
      }

      @keyframes moveBoxReversed {
  0% {
    right: ${textEnd}px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    right: calc(50% - ${scrollBuffer}px);
    opacity: 1;
  }
  100% {
    right: calc(50% - ${scrollBuffer}px);
    opacity: 0;
  }
}
      @keyframes shrinkRight  {
  0% {
    clip-path: inset(0 0 0 0); /* Fully visible */
  }
  100% {
    clip-path: inset(0 0 0 50%); /* Right half erased */
  }
}

    `;

    const styleTag = this.renderer.createElement('style');
    styleTag.textContent = style;
    this.renderer.appendChild(document.head, styleTag);

    // Apply animation styles
    this.renderer.setStyle(this.box.nativeElement, 'animation', 'moveBox 3s linear infinite');
    this.renderer.setStyle(this.text.nativeElement, 'animation', 'moveBoxReversed 3s linear infinite, shrinkRight 3s linear infinite');
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      this.isPropertiesMenuOpen = false;
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.isPropertiesMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  ngOnDestroy(): void {
    // Ensure body scroll is restored when component is destroyed
    document.body.style.overflow = 'auto';
  }
  togglePropertiesMenu() {
    this.isPropertiesMenuOpen = !this.isPropertiesMenuOpen;
  }
}
