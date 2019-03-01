import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuaguapotableComponent } from './menuaguapotable.component';

describe('MenuaguapotableComponent', () => {
  let component: MenuaguapotableComponent;
  let fixture: ComponentFixture<MenuaguapotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuaguapotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuaguapotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
