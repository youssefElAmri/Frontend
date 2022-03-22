import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderetudiantComponent } from './headeretudiant.component';

describe('HeaderetudiantComponent', () => {
  let component: HeaderetudiantComponent;
  let fixture: ComponentFixture<HeaderetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderetudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
