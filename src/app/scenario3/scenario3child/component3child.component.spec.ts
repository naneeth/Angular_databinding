import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3childComponent } from './component3child.component';

describe('Component3childComponent', () => {
  let component: Component3childComponent;
  let fixture: ComponentFixture<Component3childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component3childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
