import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiwRegistrationComponent } from './hiw-registration.component';

describe('HiwRegistrationComponent', () => {
  let component: HiwRegistrationComponent;
  let fixture: ComponentFixture<HiwRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiwRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiwRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
