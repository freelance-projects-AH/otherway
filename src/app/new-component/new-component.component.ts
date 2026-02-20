import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
 stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '700+', label: 'Projects Delivered' },
    { value: '500+', label: 'Global Clients' },
  ];

  services = [
    { title: '3D', description: 'Cutting-edge 3D modeling & rendering' },
    { title: 'Graphic', description: 'Stunning design across all media' },
    { title: 'Marketing', description: 'Strategic campaigns that convert' },
    { title: 'Branding', description: 'Complete identity systems' },
  ];
}
