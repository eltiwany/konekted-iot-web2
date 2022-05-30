import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSensorsComponent } from './delete-sensors.component';

describe('DeleteSensorsComponent', () => {
  let component: DeleteSensorsComponent;
  let fixture: ComponentFixture<DeleteSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
