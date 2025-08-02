import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { NavbarVisibilityService } from '../navbar-visibility.service';

@Component({
  selector: 'app-hare',
  templateUrl: './hare.component.html',
  styleUrls: ['./hare.component.css'],
})
export class HareComponent implements AfterViewInit {
  @ViewChild('videoContainer') videoContainer!: ElementRef;
  @ViewChild('textContainer') textContainer!: ElementRef;
  @ViewChild('textSection') textSection!: ElementRef;
  @ViewChild('textStopTrigger') textStopTrigger!: ElementRef;
@ViewChild('triggerSection') triggerSection!: ElementRef;
  @Output() sectionInView = new EventEmitter<boolean>();

  
  stopTriggerElement!: HTMLElement | null;

  constructor(private renderer: Renderer2,private navbarVisibilityService: NavbarVisibilityService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.stopTriggerElement = document.getElementById('text-stop-trigger');
      this.onWindowScroll();
      const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isAboveSection = entry.boundingClientRect.top > 0;
        const isVisible = entry.isIntersecting;

        if (isAboveSection) {
          this.navbarVisibilityService.setVisibility(true);
        } else {
          this.navbarVisibilityService.setVisibility(false);
        }
      });
    }, {
      threshold: 0.2,
    });

    observer.observe(this.triggerSection.nativeElement);
  
    }, 0);
    
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const video = this.videoContainer.nativeElement;
    const text = this.textContainer.nativeElement;

    const videoTriggerTop = this.textSection.nativeElement.getBoundingClientRect().top;
    if (videoTriggerTop <= 0) {
      this.renderer.removeClass(video, 'fixed');
      this.renderer.addClass(video, 'absolute');
    } else {
      this.renderer.removeClass(video, 'absolute');
      this.renderer.addClass(video, 'fixed');
    }

    const textSection = this.textSection.nativeElement.getBoundingClientRect();
    const textStopTop = this.stopTriggerElement?.getBoundingClientRect().top ?? Infinity;
    const textStartTop=textSection.top
    console.log(textStartTop, textStopTop);
   
let scrollBuffer = 650;

if (window.innerWidth < 768) {
  // موبايل
  scrollBuffer = 450;
} else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
  // تابلت
  scrollBuffer = 750;
} else {
  // ديسكتوب
  scrollBuffer = 650;
}

if (textStartTop <= 0 && textStopTop > scrollBuffer) {
  this.renderer.setStyle(text, 'position', 'fixed');
  this.renderer.setStyle(text, 'top', '0');
  this.renderer.setStyle(text, 'left', '0');
  this.renderer.setStyle(text, 'width', '100%');
  this.renderer.setStyle(text, 'height', '100%');
  this.renderer.setStyle(text, 'color', '#AF8255'); // بني
    this.renderer.setStyle(text, 'display', 'flex'); // إخفاء النص

}

// الحالة 2: رجعت لفوق قبل ما تدخل السيكشن
else if (textStartTop > 0) {
    this.renderer.setStyle(text, 'display', 'flex'); // إخفاء النص

  this.renderer.setStyle(text, 'position', 'absolute');
  this.renderer.setStyle(text, 'top', '0');
    this.renderer.setStyle(text, 'color', '#AF8255'); // بني

}

// الحالة 3: عدّيت نهاية السيكشن
else {
  this.renderer.setStyle(text, 'color', 'black'); // أو لون مختلف
  // this.renderer.setStyle(text, 'position', 'absolute');
  this.renderer.setStyle(text, 'display', 'none'); // إخفاء النص
}
    
  }
}
