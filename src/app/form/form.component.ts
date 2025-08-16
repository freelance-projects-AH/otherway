import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [    ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    contactForm: FormGroup;
  currentImageIndex = 0;
  private intervalId: any;
submitSuccess = false;
  submitError = '';
    isLoading = false;

constructor(
  
    private fb: FormBuilder,
    
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      country: [''],
      property: [''],
    });
  }
   nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images2.length;
    this.resetAutoAdvance();
  }
 ngOnInit(): void {
    this.startAutoAdvance();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  previousImage() {
    this.currentImageIndex =
      this.currentImageIndex === 0
        ? this.images2.length - 1
        : this.currentImageIndex - 1;
    this.resetAutoAdvance();
  }
  private startAutoAdvance() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images2.length;
    }, 2000);
  }

  private resetAutoAdvance() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.startAutoAdvance();
  }
   images2 = [
    '/slider/1.jpg',
    '/slider/2.jpg',
    '/slider/4.jpg',
    '/slider/5.jpg',
    '/slider/6.jpg',
  ];
  handleFormSubmit(data: any) {
     console.log('Form submitted:', data);
  }
   onSubmit() {
   
  }
}
