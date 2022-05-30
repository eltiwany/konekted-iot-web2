import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfigSensorsComponent } from './view-config-sensors.component';

describe('ViewConfigSensorsComponent', () => {
  let component: ViewConfigSensorsComponent;
  let fixture: ComponentFixture<ViewConfigSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConfigSensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfigSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
