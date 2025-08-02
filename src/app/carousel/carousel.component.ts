import { NgFor } from '@angular/common';
import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit, OnDestroy {
  newsItems: any[] = [
    {
      id: 1,
      title: "Campaign reveals new Naked Paper launch with bold branding strategy",
      description: "Positioning, renaming and rebranding centres around the campaign message: 'It's brown because we did.'",
      image: "/slider/1.jpg",
      category: "Press"
    },
    {
      id: 2,
      title: "Campaign reports on Otherway launching New York Office",
      description: "Otherway opens New York office to 'blow the cobwebs off' US creative brands.",
      image: "/slider/2.jpg",
      category: "Press"
    },
    {
      id: 3,
      title: "Motorway partners with Otherway to drive brand from disruptor to category leader",
      description: "As the fastest-growing used car marketplace in the UK, Motorway needed a new identity capable of matching its future ambition.",
      image: "/slider/3.png",
      category: "Press"
    },
    {
      id: 4,
      title: "Fast Company features Otherway's rebrand of America's hottest fintech company",
      description: "A rebrand with the power to shift perceptions from transactional to champion.",
      image: "/slider/4.jpg",
      category: "Press"
    },
    {
      id: 5,
      title: "Tech Innovation Drives Digital Transformation",
      description: "Exploring how emerging technologies are reshaping business landscapes across industries.",
      image: "/slider/5.jpg",
      category: "Tech"
    },
    {
      id: 6,
      title: "Sustainable Design Practices Gain Momentum",
      description: "Companies worldwide are adopting eco-friendly design principles to reduce environmental impact.",
      image: "/slider/6.jpg",
      category: "Design"
    }
  ];

  displayItems: any[] = [];
  currentIndex = 0;
  slideWidth = 370;
  translateX = 0;
  isTransitioning = true;
  private autoSlideInterval: any;

  ngOnInit() {
    this.setupInfiniteLoop();
    this.setSlideWidth();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  @HostListener('window:resize')
  onResize() {
    this.setSlideWidth();
  }

  private setSlideWidth() {
    const cardElement = document.querySelector('.news-card') as HTMLElement;
    if (cardElement) {
      const cardStyle = getComputedStyle(cardElement);
      const gap = 20; // نفس قيمة gap في CSS
      this.slideWidth = cardElement.offsetWidth + gap;
      this.translateX = -this.currentIndex * this.slideWidth;
    }
  }

  private setupInfiniteLoop() {
    this.displayItems = [
      ...this.newsItems.slice(-3),
      ...this.newsItems,
      ...this.newsItems.slice(0, 3)
    ];
    this.currentIndex = 3;
    this.translateX = -this.currentIndex * this.slideWidth;
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private nextSlide() {
    this.setSlideWidth();
    this.isTransitioning = true;
    this.currentIndex++;
    this.translateX = -this.currentIndex * this.slideWidth;

    if (this.currentIndex >= this.newsItems.length + 3) {
      setTimeout(() => {
        this.isTransitioning = false;
        this.currentIndex = 3;
        this.translateX = -this.currentIndex * this.slideWidth;
      }, 500);
    }
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
