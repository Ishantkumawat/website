import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentpanelComponent } from './agentpanel.component';

describe('AgentpanelComponent', () => {
  let component: AgentpanelComponent;
  let fixture: ComponentFixture<AgentpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentpanelComponent]
    });
    fixture = TestBed.createComponent(AgentpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
