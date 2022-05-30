import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareListCardComponent } from './hardware-list-card.component';

describe('HardwareListCardComponent', () => {
  let component: HardwareListCardComponent;
  let fixture: ComponentFixture<HardwareListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
