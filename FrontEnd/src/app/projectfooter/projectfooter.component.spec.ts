import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectfooterComponent } from './projectfooter.component';

describe('ProjectfooterComponent', () => {
  let component: ProjectfooterComponent;
  let fixture: ComponentFixture<ProjectfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectfooterComponent]
    });
    fixture = TestBed.createComponent(ProjectfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
