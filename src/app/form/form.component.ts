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
  submitSuccess = false;
  submitError = '';
  isLoading = false;

constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', []],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.isLoading = true;
    this.submitSuccess = false;
    this.submitError = '';

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      this.submitSuccess = true;
      this.contactForm.reset();
      console.log('Form submitted:', this.contactForm.value);
    }, 1500);
  }

}
