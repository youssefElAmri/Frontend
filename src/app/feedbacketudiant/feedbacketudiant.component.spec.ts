import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacketudiantComponent } from './feedbacketudiant.component';

describe('FeedbacketudiantComponent', () => {
  let component: FeedbacketudiantComponent;
  let fixture: ComponentFixture<FeedbacketudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacketudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacketudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
