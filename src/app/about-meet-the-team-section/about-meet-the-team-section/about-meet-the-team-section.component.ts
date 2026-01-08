import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface TeamMember {
  role: string;
  description: string;
  position: 'left' | 'center' | 'right';
  image: string;
}
@Component({
  selector: 'app-about-meet-the-team-section',
  imports: [CommonModule],
  templateUrl: './about-meet-the-team-section.component.html',
  styleUrl: './about-meet-the-team-section.component.css',
})
export class AboutMeetTheTeamSectionComponent {
  teamMembers: TeamMember[] = [
    {
      role: '3D',
      description: 'We turn ideas int stunning 3D visuals',
      position: 'left',
      image: '/about/3D.png',
    },
    {
      role: 'GRAPHIC',
      description: 'Designs that speak, inspire and sell',
      position: 'center',
      image: '/about/Graphic.png',
    },
    {
      role: 'MARKETING',
      description: 'Smart strategies that make your brand unforgettable',
      position: 'right',
      image: '/about/Marketing.png',
    },
  ];
}
