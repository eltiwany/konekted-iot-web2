import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfigPinTypesComponent } from './view-config-pin-types.component';

describe('ViewConfigPinTypesComponent', () => {
  let component: ViewConfigPinTypesComponent;
  let fixture: ComponentFixture<ViewConfigPinTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConfigPinTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfigPinTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
