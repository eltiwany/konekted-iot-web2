import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConfigPinTypesComponent } from './edit-config-pin-types.component';

describe('EditConfigPinTypesComponent', () => {
  let component: EditConfigPinTypesComponent;
  let fixture: ComponentFixture<EditConfigPinTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConfigPinTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConfigPinTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
