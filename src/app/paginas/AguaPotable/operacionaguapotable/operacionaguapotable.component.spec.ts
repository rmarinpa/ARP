import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionaguapotableComponent } from './operacionaguapotable.component';

describe('OperacionaguapotableComponent', () => {
  let component: OperacionaguapotableComponent;
  let fixture: ComponentFixture<OperacionaguapotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionaguapotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionaguapotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
