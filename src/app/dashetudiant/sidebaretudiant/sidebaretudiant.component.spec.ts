import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaretudiantComponent } from './sidebaretudiant.component';

describe('SidebaretudiantComponent', () => {
  let component: SidebaretudiantComponent;
  let fixture: ComponentFixture<SidebaretudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebaretudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaretudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
