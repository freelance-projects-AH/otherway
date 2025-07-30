import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HareComponent } from './hare.component';

describe('HareComponent', () => {
  let component: HareComponent;
  let fixture: ComponentFixture<HareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
