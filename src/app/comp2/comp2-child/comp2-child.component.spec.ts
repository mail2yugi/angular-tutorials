import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2ChildComponent } from './comp2-child.component';

describe('Comp2ChildComponent', () => {
  let component: Comp2ChildComponent;
  let fixture: ComponentFixture<Comp2ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
