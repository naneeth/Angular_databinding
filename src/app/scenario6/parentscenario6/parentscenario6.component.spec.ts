import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentscenario6Component } from './parentscenario6.component';

describe('Parentscenario6Component', () => {
  let component: Parentscenario6Component;
  let fixture: ComponentFixture<Parentscenario6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parentscenario6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentscenario6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
