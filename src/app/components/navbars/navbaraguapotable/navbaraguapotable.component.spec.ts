import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaraguapotableComponent } from './navbaraguapotable.component';

describe('NavbaraguapotableComponent', () => {
  let component: NavbaraguapotableComponent;
  let fixture: ComponentFixture<NavbaraguapotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbaraguapotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaraguapotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
