import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentScenario5Component } from './parent-scenario5.component';

describe('ParentScenario5Component', () => {
  let component: ParentScenario5Component;
  let fixture: ComponentFixture<ParentScenario5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentScenario5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentScenario5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
