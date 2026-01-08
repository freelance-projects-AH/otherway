import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Service {
  title: string;
  description: string;
  image?: string;
  video?: string;
  ctaText: string;
  isVideo?: boolean;
}
@Component({
  selector: 'app-our-service',
  imports: [CommonModule],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.css'
})

export class OurServiceComponent {
   services: Service[] = [
    {
      title: '3D Mockups',
      description: 'Photorealistic visuals for packaging, e-commerce, and advertising.',
        video: '/our-service/3D Animation Video.mp4',
      isVideo: true,
      ctaText: 'Request a Quote'
    },
    {
      title: '3D Animation',
      description: 'Premium 3D videos and 360° visuals to showcase products.',
      image: '/our-service/3D Mockups Image.jpg',
      ctaText: 'Request a Quote'
    },
    {
      title: 'Branding & Design',
      description: 'Logos, labels, and packaging that align with your brand identity.',
      image: '/our-service/Branding Image.jpg',
      ctaText: 'Request a Quote'
    },
    {
      title: 'Marketing',
      description: 'Digital campaigns, Google Ads, SEO, and strategic brand development.',
      image: '/our-service/Marketing Image.jpg',
      ctaText: 'Request a Quote'
    }
  ];

}
