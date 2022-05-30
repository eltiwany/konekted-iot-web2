import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorHardwaresComponent } from './monitor-hardwares.component';

describe('MonitorHardwaresComponent', () => {
  let component: MonitorHardwaresComponent;
  let fixture: ComponentFixture<MonitorHardwaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorHardwaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorHardwaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
