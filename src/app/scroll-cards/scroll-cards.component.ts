import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
interface Card {
  id: number;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-scroll-cards',
  imports: [],
  templateUrl: './scroll-cards.component.html',
  styleUrl: './scroll-cards.component.css',
   animations: [
   trigger('slideFade', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      state('out-left', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('out-right', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition('out-right => in', [
        animate('500ms ease-in-out')
      ]),
      transition('in => out-left', [
        animate('500ms ease-in-out')
      ]),
      transition('* => *', []),
    ])
  ],
})
export class ScrollCardsComponent {
@Input() cards: any[] = [];
  currentIndex = 0;
  isFixed = false;
  componentOffsetTop = 0;

  ngOnInit() {
    this.calculateOffset();
  }

  calculateOffset() {
    // This should be called after view init in a real app
    // For simplicity, we'll assume it's calculated properly
    this.componentOffsetTop = 200; // Replace with actual offset calculation
  }

  get visibleCards() {
    return this.cards.slice(this.currentIndex, this.currentIndex + 3);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Fix component when scrolled to it
    if (scrollPosition >= this.componentOffsetTop && !this.isFixed) {
      this.isFixed = true;
    } else if (scrollPosition < this.componentOffsetTop && this.isFixed) {
      this.isFixed = false;
      this.currentIndex = 0; // Reset to first set when scrolling back up
    }

    // Calculate when to trigger card transition
    if (this.isFixed) {
      const scrollDelta = scrollPosition - this.componentOffsetTop;
      const triggerPoint = 300; // pixels to scroll before transitioning
      
      if (scrollDelta > triggerPoint * (this.currentIndex / 3 + 1) && 
          this.currentIndex + 3 < this.cards.length) {
        this.currentIndex += 3;
      }
    }
  }

  getAnimationState(index: number) {
    const relativeIndex = index - this.currentIndex;
    if (relativeIndex >= 0 && relativeIndex < 3) {
      return 'in';
    } else if (relativeIndex < 0) {
      return 'out-left';
    } else {
      return 'out-right';
    }
  }
}
