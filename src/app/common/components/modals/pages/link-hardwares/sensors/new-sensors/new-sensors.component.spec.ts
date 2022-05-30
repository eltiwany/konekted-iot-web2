import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSensorsComponent } from './new-sensors.component';

describe('NewSensorsComponent', () => {
  let component: NewSensorsComponent;
  let fixture: ComponentFixture<NewSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
