import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareConnectionButtonsComponent } from './hardware-connection-buttons.component';

describe('HardwareConnectionButtonsComponent', () => {
  let component: HardwareConnectionButtonsComponent;
  let fixture: ComponentFixture<HardwareConnectionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareConnectionButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareConnectionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
