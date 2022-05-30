import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActuatorsComponent } from './edit-actuators.component';

describe('EditActuatorsComponent', () => {
  let component: EditActuatorsComponent;
  let fixture: ComponentFixture<EditActuatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditActuatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditActuatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
