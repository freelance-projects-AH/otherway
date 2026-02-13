import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialSliderComponent {
  column1Testimonials: Testimonial[] = [
    {
      text: 'This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.',
      name: 'Briana Patton',
      role: 'Operations Manager',
      image: 'assets/images/briana.jpg',
    },
    {
      text: 'Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.',
      name: 'Bilal Ahmed',
      role: 'IT Manager',
      image: 'assets/images/bilal.jpg',
    },
    {
      text: 'The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.',
      name: 'Ahmed Khalil',
      role: 'Support Specialist',
      image: 'assets/images/ahmed.jpg',
    },
  ];

  column2Testimonials: Testimonial[] = [
    {
      text: 'This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.',
      name: 'Zainab Hussain',
      role: 'Project Manager',
      image: 'assets/images/zainab.jpg',
    },
    {
      text: 'The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.',
      name: 'Aliza Khan',
      role: 'Business Analyst',
      image: 'assets/images/aliza.jpg',
    },
    {
      text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
      name: 'Omar Raza',
      role: 'CEO',
      image: 'assets/images/omar.jpg',
    },
  ];

  column3Testimonials: Testimonial[] = [
    {
      text: 'Using this ERP, our online presence and conversions significantly improved, boosting business performance.',
      name: 'Hassan Ali',
      role: 'E-commerce Manager',
      image: 'assets/images/hassan.jpg',
    },
    {
      text: 'Our business functions improved with a user-friendly design and positive customer feedback.',
      name: 'Farhan Siddiqui',
      role: 'Marketing Director',
      image: 'assets/images/farhan.jpg',
    },
    {
      text: 'They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.',
      name: 'Sana Sheikh',
      role: 'Sales Manager',
      image: 'assets/images/sana.jpg',
    },
  ];

  get column1Items(): Testimonial[] {
    // نكرر المصفوفة مرتين بالظبط للـ seamless loop
    return [...this.column1Testimonials, ...this.column1Testimonials];
  }

  get column2Items(): Testimonial[] {
    return [...this.column2Testimonials, ...this.column2Testimonials];
  }

  get column3Items(): Testimonial[] {
    return [...this.column3Testimonials, ...this.column3Testimonials];
  }
}
