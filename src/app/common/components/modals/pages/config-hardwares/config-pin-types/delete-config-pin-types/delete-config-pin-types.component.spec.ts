import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfigPinTypesComponent } from './delete-config-pin-types.component';

describe('DeleteConfigPinTypesComponent', () => {
  let component: DeleteConfigPinTypesComponent;
  let fixture: ComponentFixture<DeleteConfigPinTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfigPinTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfigPinTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
