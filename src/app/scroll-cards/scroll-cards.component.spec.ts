import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollCardsComponent } from './scroll-cards.component';

describe('ScrollCardsComponent', () => {
  let component: ScrollCardsComponent;
  let fixture: ComponentFixture<ScrollCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
