import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlActuatorsComponent } from './control-actuators.component';

describe('ControlActuatorsComponent', () => {
  let component: ControlActuatorsComponent;
  let fixture: ComponentFixture<ControlActuatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlActuatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlActuatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
