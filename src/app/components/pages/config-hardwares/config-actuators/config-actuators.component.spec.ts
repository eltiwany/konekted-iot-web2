import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigActuatorsComponent } from './config-actuators.component';

describe('ConfigActuatorsComponent', () => {
  let component: ConfigActuatorsComponent;
  let fixture: ComponentFixture<ConfigActuatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigActuatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigActuatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
