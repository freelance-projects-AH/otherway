
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MediaGalleryComponent } from "../media-gallery/media-gallery.component";
import { HeroTwoComponent } from '../hero-two/hero-two.component';

interface MediaItem {
  index: number;
  file_link: string;
  file_type: string;
  _id: string;
}

interface Project {
  _id: string;
  title: string;
  description: string;
  categories: string[];
  media: MediaItem[];
}

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, MediaGalleryComponent,HeroTwoComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
project: Project | null = null;
  loading = true;
  error = false;
  currentMediaIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      if (projectId) {
        this.loadProjectDetails(projectId);
      }
    });
  }

  ngOnInit() {

  }

  loadProjectDetails(projectId: string) {
    this.loading = true;
    this.error = false;


    const url = `http://93.127.202.37:3100/api/projects/${projectId}`;

    this.http.get<Project>(url).subscribe({
      next: (data) => {
         console.log("this.project2222",data)
        this.project = data;
        console.log("this.project",this.project)
        this.loading = false;


        if (this.project && this.project.media) {
          this.project.media.sort((a, b) => a.index - b.index);
        }
      },
      error: (error) => {
        console.error('Error loading project details:', error);
        this.error = true;
        this.loading = false;
      }
    });
  }

  getMediaType(fileType: string): 'video' | 'image' {
    const videoTypes = ['mp4', 'webm', 'avi', 'mov', 'video'];
    return videoTypes.some(type => fileType.toLowerCase().includes(type)) ? 'video' : 'image';
  }

  goBack() {
    this.router.navigate(['/work']);
  }

  setCurrentMedia(index: number) {
    this.currentMediaIndex = index;
  }

  nextMedia() {
    if (this.project && this.project.media && this.currentMediaIndex < this.project.media.length - 1) {
      this.currentMediaIndex++;
    }
  }

  previousMedia() {
    if (this.currentMediaIndex > 0) {
      this.currentMediaIndex--;
    }
  }

  getCurrentMedia(): MediaItem | null {
    if (!this.project || !this.project.media || this.project.media.length === 0) {
      return null;
    }
    return this.project.media[this.currentMediaIndex];
  }


isRowStart(index: number): boolean {
  if (index === 0) return true;


  let currentRow = 0;
  let itemsProcessed = 0;

  while (itemsProcessed <= index) {
    if (currentRow % 2 === 0) {
      if (itemsProcessed === index) return true;
      itemsProcessed += 1;
    } else {
      if (itemsProcessed === index) return true;
      itemsProcessed += 2;
    }
    currentRow++;
  }

  return false;
}

getRowClass(index: number): string {
  let currentRow = 0;
  let itemsProcessed = 0;

  while (itemsProcessed <= index) {
    if (currentRow % 2 === 0) {
      if (itemsProcessed === index) {
        return 'grid-cols-1';
      }
      itemsProcessed += 1;
    } else {
      if (itemsProcessed === index) {
        return 'grid-cols-1 md:grid-cols-2';
      }
      itemsProcessed += 2;
    }
    currentRow++;
  }

  return 'grid-cols-1';
}

isTwoColumnRow(index: number): boolean {
  let currentRow = 0;
  let itemsProcessed = 0;

  while (itemsProcessed <= index) {
    if (currentRow % 2 === 0) {
      if (itemsProcessed === index) return false;
      itemsProcessed += 1;
    } else {
      if (itemsProcessed === index) return true;
      itemsProcessed += 2;
    }
    currentRow++;
  }

  return false;
}
}
