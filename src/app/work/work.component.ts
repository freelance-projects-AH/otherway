import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Router } from '@angular/router';
import { HeroTwoComponent } from '../hero-two/hero-two.component';
import { IconsComponent } from '../icons/icons.component';
import { CarouselComponent } from '../carousel/carousel.component';

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

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export interface ApiResponse {
  projects: Project[];
  allCategories: string[];
  pagination: Pagination;
}

@Component({
  selector: 'app-work',
  imports: [
    ProjectCardComponent,
    CommonModule,
    HeroTwoComponent,
    IconsComponent,
    CarouselComponent,
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent implements OnInit {
  activeTab = 'all';
  projects: Project[] = [];
  allCategories: string[] = [];
  loading = false;

  // Pagination
  currentPage = 1;
  itemsPerPage = 20;
  pagination: Pagination | null = null;

  tabs: { _id: string; label: string }[] = [{ _id: 'all', label: 'All' }];

  constructor(private http: HttpClient, private router: Router) {}

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
      },
    });
  }

  updateTabs() {
    this.tabs = [
      { _id: 'all', label: 'All' },
      ...this.allCategories.map((category) => ({
        _id: category,
        label: this.capitalizeFirst(category),
      })),
    ];
  }

  capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  onTabClick(tabId: string) {
    this.activeTab = tabId;
    this.currentPage = 1; // Reset to first page when changing tabs
    console.log('Active tab changed to:', this.activeTab);
    this.loadProjects();
  }

  loadProjects() {
    this.loading = true;
    const category = this.activeTab === 'all' ? '' : this.activeTab;

    // Build URL with pagination parameters
    let url = `https://real-estate-backend-pi-steel.vercel.app/api/projects?page=${this.currentPage}&limit=${this.itemsPerPage}`;
    if (category) {
      url += `&category=${category}`;
    }

    this.http.get<ApiResponse>(url).subscribe({
      next: (data) => {
        this.projects = data.projects;
        this.pagination = data.pagination;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.loading = false;
      },
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadProjects();
    // Scroll to top of section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getMediaType(fileType: string): 'video' | 'image' {
    const videoTypes = ['mp4', 'webm', 'avi', 'mov', 'video'];
    return videoTypes.some((type) => fileType.toLowerCase().includes(type))
      ? 'video'
      : 'image';
  }

  getPrimaryMedia(
    project: Project
  ): { src: string; mediaType: 'video' | 'image' } | null {
    if (!project.media || project.media.length === 0) {
      return null;
    }

    const sortedMedia = project.media.sort((a, b) => a.index - b.index);
    const primaryMedia = sortedMedia[0];

    return {
      src: primaryMedia.file_link,
      mediaType: this.getMediaType(primaryMedia.file_type),
    };
  }

  onProjectCardClick(project: Project) {
    localStorage.setItem('projectName', project.title);
    this.router.navigate(['/project-details', project._id]);
  }
}
