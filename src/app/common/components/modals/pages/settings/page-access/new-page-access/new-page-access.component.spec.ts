import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPageAccessComponent } from './new-page-access.component';

describe('NewPageAccessComponent', () => {
  let component: NewPageAccessComponent;
  let fixture: ComponentFixture<NewPageAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPageAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPageAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
