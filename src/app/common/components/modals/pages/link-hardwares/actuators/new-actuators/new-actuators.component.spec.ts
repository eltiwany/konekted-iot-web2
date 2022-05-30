import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewActuatorsComponent } from './new-actuators.component';

describe('NewActuatorsComponent', () => {
  let component: NewActuatorsComponent;
  let fixture: ComponentFixture<NewActuatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewActuatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewActuatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
