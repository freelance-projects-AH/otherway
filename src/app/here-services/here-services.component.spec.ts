import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereServicesComponent } from './here-services.component';

describe('HereServicesComponent', () => {
  let component: HereServicesComponent;
  let fixture: ComponentFixture<HereServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HereServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HereServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
