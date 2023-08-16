import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailplansComponent } from './trailplans.component';

describe('TrailplansComponent', () => {
  let component: TrailplansComponent;
  let fixture: ComponentFixture<TrailplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailplansComponent]
    });
    fixture = TestBed.createComponent(TrailplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
