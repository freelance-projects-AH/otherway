import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWhoWeAreComponent } from './about-who-we-are.component';

describe('AboutWhoWeAreComponent', () => {
  let component: AboutWhoWeAreComponent;
  let fixture: ComponentFixture<AboutWhoWeAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWhoWeAreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWhoWeAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
