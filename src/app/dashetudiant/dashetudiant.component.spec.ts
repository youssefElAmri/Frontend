import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashetudiantComponent } from './dashetudiant.component';

describe('DashetudiantComponent', () => {
  let component: DashetudiantComponent;
  let fixture: ComponentFixture<DashetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashetudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
