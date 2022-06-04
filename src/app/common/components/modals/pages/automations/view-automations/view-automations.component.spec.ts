import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAutomationsComponent } from './view-automations.component';

describe('ViewAutomationsComponent', () => {
  let component: ViewAutomationsComponent;
  let fixture: ComponentFixture<ViewAutomationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAutomationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAutomationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
