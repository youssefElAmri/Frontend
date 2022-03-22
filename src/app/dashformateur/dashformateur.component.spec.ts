import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashformateurComponent } from './dashformateur.component';

describe('DashformateurComponent', () => {
  let component: DashformateurComponent;
  let fixture: ComponentFixture<DashformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
