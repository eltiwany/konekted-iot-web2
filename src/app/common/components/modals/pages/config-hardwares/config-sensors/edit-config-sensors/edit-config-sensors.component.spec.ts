import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConfigSensorsComponent } from './edit-config-sensors.component';

describe('EditConfigSensorsComponent', () => {
  let component: EditConfigSensorsComponent;
  let fixture: ComponentFixture<EditConfigSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConfigSensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConfigSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
