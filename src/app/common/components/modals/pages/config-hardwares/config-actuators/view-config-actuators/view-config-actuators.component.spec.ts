import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfigActuatorsComponent } from './view-config-actuators.component';

describe('ViewConfigActuatorsComponent', () => {
  let component: ViewConfigActuatorsComponent;
  let fixture: ComponentFixture<ViewConfigActuatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConfigActuatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfigActuatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
