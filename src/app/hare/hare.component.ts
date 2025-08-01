import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-hare',
  templateUrl: './hare.component.html',
  styleUrls: ['./hare.component.css'],
})
export class HareComponent implements AfterViewInit {
  @ViewChild('videoContainer') videoContainer!: ElementRef;
  @ViewChild('textContainer') textContainer!: ElementRef;
  @ViewChild('textSection') textSection!: ElementRef;

  stopTriggerElement!: HTMLElement | null;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.stopTriggerElement = document.getElementById('text-stop-trigger');
      this.onWindowScroll();
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

    const textStartTop = this.textSection.nativeElement.getBoundingClientRect().top;
    const textStopTop = this.stopTriggerElement?.getBoundingClientRect().top ?? Infinity;

    if (textStartTop <= 0 && textStopTop > 0) {
      this.renderer.setStyle(text, 'position', 'fixed');
      this.renderer.setStyle(text, 'top', '0');
      this.renderer.setStyle(text, 'left', '0');
      this.renderer.setStyle(text, 'width', '100%');
      this.renderer.setStyle(text, 'height', '100%');
    } else {
      this.renderer.setStyle(text, 'position', 'absolute');
      this.renderer.setStyle(text, 'top', '0');
    }
  }
}
