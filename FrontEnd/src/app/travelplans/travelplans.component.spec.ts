import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelplansComponent } from './travelplans.component';

describe('TravelplansComponent', () => {
  let component: TravelplansComponent;
  let fixture: ComponentFixture<TravelplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelplansComponent]
    });
    fixture = TestBed.createComponent(TravelplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
