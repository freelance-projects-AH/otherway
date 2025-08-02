import { NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  newsItems:any = [
    {
      id: 1,
      title: "Campaign reveals new Naked Paper launch with bold branding strategy",
      description: "Positioning, renaming and rebranding centres around the campaign message: 'It's brown because we did.'",
      image: "/api/placeholder/300/180",
      category: "Press"
    },
    {
      id: 2,
      title: "Campaign reports on Otherway launching New York Office",
      description: "Otherway opens New York office to 'blow the cobwebs off' US creative brands.",
      image: "/api/placeholder/300/180",
      category: "Press"
    },
    {
      id: 3,
      title: "Motorway partners with Otherway to drive brand from disruptor to category leader",
      description: "As the fastest-growing used car marketplace in the UK, Motorway needed a new identity capable of matching its future ambition.",
      image: "/api/placeholder/300/180",
      category: "Press"
    },
    {
      id: 4,
      title: "Fast Company features Otherway's rebrand of America's hottest fintech company",
      description: "A rebrand with the power to shift perceptions from transactional to champion.",
      image: "/api/placeholder/300/180",
      category: "Press"
    },
    {
      id: 5,
      title: "Tech Innovation Drives Digital Transformation",
      description: "Exploring how emerging technologies are reshaping business landscapes across industries.",
      image: "/api/placeholder/300/180",
      category: "Tech"
    },
    {
      id: 6,
      title: "Sustainable Design Practices Gain Momentum",
      description: "Companies worldwide are adopting eco-friendly design principles to reduce environmental impact.",
      image: "/api/placeholder/300/180",
      category: "Design"
    }
  ];
  currentIndex = 0;
  slideWidth = 370; // card width + gap
  translateX = 0;
  isTransitioning = true;
  displayItems:any = [];
  private autoSlideInterval: any;


  ngOnInit() {
    this.setupInfiniteLoop();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  private setupInfiniteLoop() {
    // Create a display array with duplicated items for seamless looping
    this.displayItems = [
      ...this.newsItems.slice(-3), // Last 3 items at the beginning
      ...this.newsItems,           // Original items
      ...this.newsItems.slice(0, 3) // First 3 items at the end
    ];
    
    // Start at the first real item (after the duplicated last items)
    this.currentIndex = 3;
    this.translateX = -this.currentIndex * this.slideWidth;
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Slide every 3 seconds
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private nextSlide() {
    this.isTransitioning = true;
    this.currentIndex++;
    this.translateX = -this.currentIndex * this.slideWidth;

    // Check if we've reached the end (first duplicated items)
    if (this.currentIndex >= this.newsItems.length + 3) {
      setTimeout(() => {
        this.isTransitioning = false;
        this.currentIndex = 3; // Reset to first real item
        this.translateX = -this.currentIndex * this.slideWidth;
      }, 500); // Wait for transition to complete
    }
  }
  
}
