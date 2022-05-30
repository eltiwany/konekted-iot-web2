import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActuatorsComponent } from './view-actuators.component';

describe('ViewActuatorsComponent', () => {
  let component: ViewActuatorsComponent;
  let fixture: ComponentFixture<ViewActuatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewActuatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActuatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
