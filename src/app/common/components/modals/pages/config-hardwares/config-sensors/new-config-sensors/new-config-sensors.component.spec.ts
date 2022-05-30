import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConfigSensorsComponent } from './new-config-sensors.component';

describe('NewConfigSensorsComponent', () => {
  let component: NewConfigSensorsComponent;
  let fixture: ComponentFixture<NewConfigSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConfigSensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConfigSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
