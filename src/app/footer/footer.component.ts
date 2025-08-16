import { Component } from '@angular/core';
import { Router,RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-footer',
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
constructor(private router: Router) {}
email: string = '';

  onSubmit() {
    if (this.email) {
      console.log('Newsletter subscription:', this.email);
      // Handle newsletter subscription logic here
      this.email = '';
    }
  }
  phoneNumber = '201208855866';
  message = 'Hello! How can i help you sir';
  get whatsappUrl(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
  phoneNumber2 = '971557706719';
  get whatsappUrl2(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber2}?text=${encodedMessage}`;
  }
}
