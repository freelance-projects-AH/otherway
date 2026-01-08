import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeetTheTeamSectionComponent } from './about-meet-the-team-section.component';

describe('AboutMeetTheTeamSectionComponent', () => {
  let component: AboutMeetTheTeamSectionComponent;
  let fixture: ComponentFixture<AboutMeetTheTeamSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeetTheTeamSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeetTheTeamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
