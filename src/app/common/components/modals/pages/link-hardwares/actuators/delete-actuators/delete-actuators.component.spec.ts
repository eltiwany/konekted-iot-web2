import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActuatorsComponent } from './delete-actuators.component';

describe('DeleteActuatorsComponent', () => {
  let component: DeleteActuatorsComponent;
  let fixture: ComponentFixture<DeleteActuatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteActuatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActuatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
