import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopReportHeadingComponent } from './top-report-heading.component';

describe('TopReportHeadingComponent', () => {
  let component: TopReportHeadingComponent;
  let fixture: ComponentFixture<TopReportHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopReportHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopReportHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
