import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges,OnInit, OnChanges } from '@angular/core';
interface MediaItem {
  index: number;
  file_link: string;
  file_type: string;

}
@Component({
  selector: 'app-media-gallery',
  imports: [CommonModule],
  templateUrl: './media-gallery.component.html',
  styleUrl: './media-gallery.component.css'
})
export class MediaGalleryComponent implements OnInit, OnChanges {
@Input() mediaItems: MediaItem[] = [];
  @Input() height: string = '600px';
  @Input() showNavigation: boolean = true;
  @Input() showThumbnails: boolean = true;
  @Input() showCounter: boolean = true;
  @Input() showControls: boolean = true;
  @Input() autoplay: boolean = true;
  @Input() muted: boolean = true;
  @Input() altText: string = 'Media content';
    @Input() project:any

  currentMediaIndex = 0;

  ngOnInit() {
    this.initializeMedia();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mediaItems'] && this.mediaItems) {
      this.initializeMedia();
    }
  }

  initializeMedia() {
    if (this.mediaItems && this.mediaItems.length > 0) {
      // Sort media by index
      this.mediaItems.sort((a, b) => a.index - b.index);
      this.currentMediaIndex = 0;
    }
  }

  getMediaType(fileType: string): 'video' | 'image' {
    const videoTypes = ['mp4', 'webm', 'avi', 'mov', 'video'];
    return videoTypes.some(type => fileType.toLowerCase().includes(type)) ? 'video' : 'image';
  }

  getCurrentMedia(): MediaItem | null {
    if (!this.mediaItems || this.mediaItems.length === 0) {
      return null;
    }
    return this.mediaItems[this.currentMediaIndex];
  }

  setCurrentMedia(index: number) {
    if (index >= 0 && index < this.mediaItems.length) {
      this.currentMediaIndex = index;
    }
  }

  nextMedia() {
    if (this.currentMediaIndex < this.mediaItems.length - 1) {
      this.currentMediaIndex++;
    }
  }

  previousMedia() {
    if (this.currentMediaIndex > 0) {
      this.currentMediaIndex--;
    }
  }
}
