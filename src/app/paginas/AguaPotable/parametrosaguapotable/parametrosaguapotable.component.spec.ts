import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosaguapotableComponent } from './parametrosaguapotable.component';

describe('ParametrosaguapotableComponent', () => {
  let component: ParametrosaguapotableComponent;
  let fixture: ComponentFixture<ParametrosaguapotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosaguapotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosaguapotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
