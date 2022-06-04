import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAutomationsComponent } from './edit-automations.component';

describe('EditAutomationsComponent', () => {
  let component: EditAutomationsComponent;
  let fixture: ComponentFixture<EditAutomationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAutomationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAutomationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
