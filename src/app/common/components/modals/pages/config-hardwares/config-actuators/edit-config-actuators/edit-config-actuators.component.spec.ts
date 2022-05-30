import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConfigActuatorsComponent } from './edit-config-actuators.component';

describe('EditConfigActuatorsComponent', () => {
  let component: EditConfigActuatorsComponent;
  let fixture: ComponentFixture<EditConfigActuatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConfigActuatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConfigActuatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
