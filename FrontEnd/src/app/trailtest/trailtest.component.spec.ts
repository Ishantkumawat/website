import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailtestComponent } from './trailtest.component';

describe('TrailtestComponent', () => {
  let component: TrailtestComponent;
  let fixture: ComponentFixture<TrailtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailtestComponent]
    });
    fixture = TestBed.createComponent(TrailtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
