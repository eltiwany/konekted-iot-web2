import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDeviceCardComponent } from './control-device-card.component';

describe('ControlDeviceCardComponent', () => {
  let component: ControlDeviceCardComponent;
  let fixture: ComponentFixture<ControlDeviceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDeviceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDeviceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
