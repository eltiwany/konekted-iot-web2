import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAutomationsComponent } from './new-automations.component';

describe('NewAutomationsComponent', () => {
  let component: NewAutomationsComponent;
  let fixture: ComponentFixture<NewAutomationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAutomationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAutomationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
