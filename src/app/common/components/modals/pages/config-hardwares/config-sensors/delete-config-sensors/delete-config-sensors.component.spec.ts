import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfigSensorsComponent } from './delete-config-sensors.component';

describe('DeleteConfigSensorsComponent', () => {
  let component: DeleteConfigSensorsComponent;
  let fixture: ComponentFixture<DeleteConfigSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfigSensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfigSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
