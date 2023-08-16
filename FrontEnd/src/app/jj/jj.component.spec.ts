import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JjComponent } from './jj.component';

describe('JjComponent', () => {
  let component: JjComponent;
  let fixture: ComponentFixture<JjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JjComponent]
    });
    fixture = TestBed.createComponent(JjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
