import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroTwoComponent } from '../hero-two/hero-two.component';
import { FormComponent } from "../form/form.component";
@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule, HeroTwoComponent, FormComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  phoneNumber = '201208855866';
  phoneNumber2 = '971557706719';
  message = 'Hello! How can I help you?';

  get whatsappUrl(): string {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
  }

  get whatsappUrl2(): string {
    return `https://wa.me/${this.phoneNumber2}?text=${encodeURIComponent(this.message)}`;
  }
}
