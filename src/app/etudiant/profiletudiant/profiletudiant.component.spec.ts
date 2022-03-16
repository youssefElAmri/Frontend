import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiletudiantComponent } from './profiletudiant.component';

describe('ProfiletudiantComponent', () => {
  let component: ProfiletudiantComponent;
  let fixture: ComponentFixture<ProfiletudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiletudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiletudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
