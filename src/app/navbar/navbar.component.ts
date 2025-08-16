import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router'; // ✅
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  isMobileMenuOpen = false;
  isPropertiesMenuOpen = false;
  triggerElement: HTMLElement | null = null;
  @ViewChild('box', { static: false }) box!: ElementRef;
  @ViewChild('text', { static: false }) text!: ElementRef;
  @ViewChild('navSection', { static: false }) navSection!: ElementRef;

  private animationFrameId!: number;
  private routerEventsSub!: Subscription;

  constructor(
    private renderer: Renderer2,
    private router: Router 
  ) {}

  ngAfterViewInit(): void {
    this.routerEventsSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
        }

        setTimeout(() => {
          this.triggerElement = document.getElementById('text-stop-trigger2');
          if (this.triggerElement) {
            this.setupScrollAnimation();
          } else {
            console.log('Trigger element not found on new route');
          }
        }, 100);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.routerEventsSub) {
      this.routerEventsSub.unsubscribe();
    }
  }

  private setupScrollAnimation(): void {
    if (!this.triggerElement) {
      return;
    }

    const updateAnimation = () => {
      const currentScroll = window.scrollY;
      const triggerPosition = this.triggerElement?.offsetTop ?? 0;
      const windowHeight = window.innerHeight;
      let progress = 0;

      if (currentScroll <= triggerPosition) {
        progress = currentScroll / triggerPosition;
      } else {
        progress = 1;
      }

      this.applyAnimationProgress(progress);
      this.animationFrameId = requestAnimationFrame(updateAnimation);
    };

    this.animationFrameId = requestAnimationFrame(updateAnimation);
  }

  private applyAnimationProgress(progress: number): void {
    if (!this.box?.nativeElement || !this.text?.nativeElement || !this.navSection?.nativeElement) {
      return;
    }

    const width = window.innerWidth;
    let boxEnd = -120;
    let textEnd = -155;
    let textStart = -150;
    let boxStart = 200;
    let navSectionStart = 176;
    let navSectionEnd = -30;

    if (width < 768) {
      textEnd = -52;
      textStart = -60;
      boxStart = 50;
      navSectionStart = 128;
      navSectionEnd = 80;
    }

    const boxPosition = boxEnd + (boxStart * progress);
    const textPosition = textStart + (textEnd + 120) * progress;
    const navMargin = navSectionStart + (navSectionEnd - navSectionStart) * progress;

    this.renderer.setStyle(this.box.nativeElement, 'left', `${boxPosition}px`);
    this.renderer.setStyle(this.text.nativeElement, 'right', `${textPosition}px`);
    this.renderer.setStyle(this.text.nativeElement, 'clip-path', `inset(0 0 0 ${progress * 100}%)`);
    this.renderer.setStyle(this.navSection.nativeElement, 'margin-left', `${navMargin}px`);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
    if (this.isMobileMenuOpen) this.isPropertiesMenuOpen = false;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.isPropertiesMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  togglePropertiesMenu() {
    this.isPropertiesMenuOpen = !this.isPropertiesMenuOpen;
  }
}
