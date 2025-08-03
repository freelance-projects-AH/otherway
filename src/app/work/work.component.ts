import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Router } from '@angular/router';
import { HeroTwoComponent } from '../hero-two/hero-two.component';
export interface MediaItem {
  index: number;
  file_link: string;
  file_type: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  categories: string[];
  media: MediaItem[];
}

export interface ApiResponse {
  projects: Project[];
  allCategories: string[];
}

@Component({
  selector: 'app-work',
  imports: [ProjectCardComponent,CommonModule,HeroTwoComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit {
   activeTab = 'all';
  projects: Project[] = [];
  allCategories: string[] = [];
  loading = false;

  tabs: { _id: string; label: string }[] = [
    { _id: 'all', label: 'All' }
  ];

  constructor(private http: HttpClient,  private router: Router) {}
 ngOnInit() {
    this.loadProjects();
    this.loadCategories();
  }

  loadCategories() {
    const url = `https://real-estate-backend-pi-steel.vercel.app/api/projects`;

    this.http.get<ApiResponse>(url).subscribe({
      next: (data) => {
        this.allCategories = data.allCategories;
        this.updateTabs();
      },
      error: (error) => {
        console.error('Error loading categories:', error);
        this.updateTabs();
      }
    });
  }

  updateTabs() {
    this.tabs = [
      { _id: 'all', label: 'All' },
      ...this.allCategories.map(category => ({
        _id: category,
        label: this.capitalizeFirst(category)
      }))
    ];
  }

  capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  onTabClick(tabId: string) {
    this.activeTab = tabId;
    console.log('Active tab changed to:', this.activeTab);
    this.loadProjects();
  }

  loadProjects() {
    this.loading = true;
    const category = this.activeTab === 'all' ? '' : this.activeTab;
    const url = `https://real-estate-backend-pi-steel.vercel.app/api/projects${category ? `?category=${category}` : ''}`;

    this.http.get<ApiResponse>(url).subscribe({
      next: (data) => {
        this.projects = data.projects;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.loading = false;

      }
    });
  }

  getMediaType(fileType: string): 'video' | 'image' {
    const videoTypes = ['mp4', 'webm', 'avi', 'mov', 'video'];
    return videoTypes.some(type => fileType.toLowerCase().includes(type)) ? 'video' : 'image';
  }

  getPrimaryMedia(project: Project): { src: string; mediaType: 'video' | 'image' } | null {
    if (!project.media || project.media.length === 0) {
      return null;
    }

    const sortedMedia = project.media.sort((a, b) => a.index - b.index);
    const primaryMedia = sortedMedia[0];

    return {
      src: primaryMedia.file_link,
      mediaType: this.getMediaType(primaryMedia.file_type)
    };
  }
    onProjectCardClick(project: Project) {
    this.router.navigate(['/project-details', project._id]);
  }
}
