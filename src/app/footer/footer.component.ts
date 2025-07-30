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
}
