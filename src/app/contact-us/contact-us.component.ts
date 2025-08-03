import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroTwoComponent } from '../hero-two/hero-two.component';
@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule,HeroTwoComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
formData = {
    name: '',
    phone: '',
    email: '',
    propertyInterest: ''
  };

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.formData);
      // Handle form submission here
      alert('Thank you for your enquiry! We will get back to you soon.');
      this.resetForm();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.formData.name &&
      this.formData.phone &&
      this.formData.email &&
      this.formData.propertyInterest
    );
  }

  private resetForm() {
    this.formData = {
      name: '',
      phone: '',
      email: '',
      propertyInterest: ''
    };
  }
}
