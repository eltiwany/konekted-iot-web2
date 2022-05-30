import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConfigPinTypesComponent } from './new-config-pin-types.component';

describe('NewConfigPinTypesComponent', () => {
  let component: NewConfigPinTypesComponent;
  let fixture: ComponentFixture<NewConfigPinTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConfigPinTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConfigPinTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
