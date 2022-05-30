import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomateHardwaresComponent } from './automate-hardwares.component';

describe('AutomateHardwaresComponent', () => {
  let component: AutomateHardwaresComponent;
  let fixture: ComponentFixture<AutomateHardwaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomateHardwaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomateHardwaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
