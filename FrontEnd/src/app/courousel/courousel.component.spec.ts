import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourouselComponent } from './courousel.component';

describe('CourouselComponent', () => {
  let component: CourouselComponent;
  let fixture: ComponentFixture<CourouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourouselComponent]
    });
    fixture = TestBed.createComponent(CourouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
