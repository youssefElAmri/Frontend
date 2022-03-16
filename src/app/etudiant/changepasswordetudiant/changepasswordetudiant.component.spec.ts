import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordetudiantComponent } from './changepasswordetudiant.component';

describe('ChangepasswordetudiantComponent', () => {
  let component: ChangepasswordetudiantComponent;
  let fixture: ComponentFixture<ChangepasswordetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordetudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
