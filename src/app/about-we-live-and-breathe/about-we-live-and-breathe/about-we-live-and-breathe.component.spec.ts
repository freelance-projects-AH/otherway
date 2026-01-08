import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWeLiveAndBreatheComponent } from './about-we-live-and-breathe.component';

describe('AboutWeLiveAndBreatheComponent', () => {
  let component: AboutWeLiveAndBreatheComponent;
  let fixture: ComponentFixture<AboutWeLiveAndBreatheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWeLiveAndBreatheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWeLiveAndBreatheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
