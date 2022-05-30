import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfigActuatorsComponent } from './delete-config-actuators.component';

describe('DeleteConfigActuatorsComponent', () => {
  let component: DeleteConfigActuatorsComponent;
  let fixture: ComponentFixture<DeleteConfigActuatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfigActuatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfigActuatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
