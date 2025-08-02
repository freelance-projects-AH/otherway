import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeToggleComponent } from '../../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar2',
  imports: [CommonModule,RouterModule,ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent2  {
  isHome: boolean = false;
  isBurgerOpen: boolean = false;
  currentPage: string = '';
  scrollProgress: number = 0;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        this.isHome = url === '/';
        this.currentPage = this.getPageTitle(url);
        this.isBurgerOpen = false;
      });
  }

  toggleBurger() {
    this.isBurgerOpen = !this.isBurgerOpen;
  }

  getPageTitle(url: string): string {
    const segments = url.split('/');
    return segments[1]?.charAt(0).toUpperCase() + segments[1]?.slice(1) || 'Home';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;
  }
}