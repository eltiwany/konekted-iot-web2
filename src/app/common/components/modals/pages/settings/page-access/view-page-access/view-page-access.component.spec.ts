import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPageAccessComponent } from './view-page-access.component';

describe('ViewPageAccessComponent', () => {
  let component: ViewPageAccessComponent;
  let fixture: ComponentFixture<ViewPageAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPageAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPageAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
