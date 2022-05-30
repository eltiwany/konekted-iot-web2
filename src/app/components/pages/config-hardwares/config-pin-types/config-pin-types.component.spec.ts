import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPinTypesComponent } from './config-pin-types.component';

describe('ConfigPinTypesComponent', () => {
  let component: ConfigPinTypesComponent;
  let fixture: ComponentFixture<ConfigPinTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPinTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPinTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
