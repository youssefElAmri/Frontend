import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordformateurComponent } from './changepasswordformateur.component';

describe('ChangepasswordformateurComponent', () => {
  let component: ChangepasswordformateurComponent;
  let fixture: ComponentFixture<ChangepasswordformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
