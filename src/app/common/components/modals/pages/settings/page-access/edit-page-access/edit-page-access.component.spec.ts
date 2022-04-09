import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageAccessComponent } from './edit-page-access.component';

describe('EditPageAccessComponent', () => {
  let component: EditPageAccessComponent;
  let fixture: ComponentFixture<EditPageAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPageAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPageAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
