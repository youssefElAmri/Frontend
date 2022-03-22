import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteretudiantComponent } from './footeretudiant.component';

describe('FooteretudiantComponent', () => {
  let component: FooteretudiantComponent;
  let fixture: ComponentFixture<FooteretudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooteretudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooteretudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
