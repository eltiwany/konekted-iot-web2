import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConfigActuatorsComponent } from './new-config-actuators.component';

describe('NewConfigActuatorsComponent', () => {
  let component: NewConfigActuatorsComponent;
  let fixture: ComponentFixture<NewConfigActuatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConfigActuatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConfigActuatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
