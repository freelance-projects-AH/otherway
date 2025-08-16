import { Component } from '@angular/core';
import { HeroTwoComponent } from '../hero-two/hero-two.component';
import { CommonModule } from '@angular/common';
import { FAQComponent } from '../faq/faq.component';

@Component({
  selector: 'app-about-us',
  imports: [HeroTwoComponent,CommonModule,FAQComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
cards = [
    {
      title: 'Say hello',
      subtitle: 'Clients',
      linkText: 'hello@21cb.com',
      link: 'mailto:hello@21cb.com',
      titleClass: 'text-gray-900',
    },
    {
      title: 'Follow us',
      subtitle: 'LinkedIn',
      linkText: '@twentyfirstcenturybrand',
      link: 'https://linkedin.com',
      titleClass: 'text-purple-900',
    },
    {
      title: 'Find us',
      subtitle: 'London',
      linkText: '27 Paul Street',
      link: '#',
      titleClass: 'text-gray-900',
    },
  ];
}
