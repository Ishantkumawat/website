import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratepdfComponent } from './generatepdf.component';

describe('GeneratepdfComponent', () => {
  let component: GeneratepdfComponent;
  let fixture: ComponentFixture<GeneratepdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratepdfComponent]
    });
    fixture = TestBed.createComponent(GeneratepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
