import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantquestionComponent } from './etudiantquestion.component';

describe('EtudiantquestionComponent', () => {
  let component: EtudiantquestionComponent;
  let fixture: ComponentFixture<EtudiantquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
