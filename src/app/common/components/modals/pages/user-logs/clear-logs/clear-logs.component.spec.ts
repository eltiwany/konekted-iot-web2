import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearLogsComponent } from './clear-logs.component';

describe('ClearLogsComponent', () => {
  let component: ClearLogsComponent;
  let fixture: ComponentFixture<ClearLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
