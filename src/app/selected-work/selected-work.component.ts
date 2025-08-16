import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Router, RouterModule } from '@angular/router';
import { ApiResponse, Project } from '../work/work.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarVisibilityService } from '../navbar-visibility.service';

@Component({
  selector: 'app-selected-work',
  imports: [ProjectCardComponent,RouterModule ,CommonModule],
  templateUrl: './selected-work.component.html',
  styleUrl: './selected-work.component.css'
})
export class SelectedWorkComponent {
  projects: Project[] = [];
  loading = false;
  @ViewChild('triggerSection') triggerSection!: ElementRef;

    constructor(private http: HttpClient,  private router: Router,private navbarVisibilityService: NavbarVisibilityService) {}
@HostListener('window:scroll', [])
  onWindowScroll(): void {
    const triggerElement = this.triggerSection.nativeElement;
  const triggerRect = triggerElement.getBoundingClientRect();
  const triggerTop = triggerRect.top;
  const triggerBottom = triggerRect.bottom;
  
  // Show navbar when section is above viewport or below viewport
  if (triggerTop > window.innerHeight || triggerBottom-150 > 0) {
    this.navbarVisibilityService.setVisibility(true);
  } else {
    this.navbarVisibilityService.setVisibility(false);
  }
    
  
  }
ngOnInit() {
    this.loadProjects();
  }
loadProjects() {
    this.loading = true;
    const url = `https://real-estate-backend-pi-steel.vercel.app/api/projects`;

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
  getMediaType(fileType: string): 'video' | 'image' {
    const videoTypes = ['mp4', 'webm', 'avi', 'mov', 'video'];
    return videoTypes.some(type => fileType.toLowerCase().includes(type)) ? 'video' : 'image';
  }
     onProjectCardClick(project: Project) {
    this.router.navigate(['/project-details', project._id]);
  }
}
