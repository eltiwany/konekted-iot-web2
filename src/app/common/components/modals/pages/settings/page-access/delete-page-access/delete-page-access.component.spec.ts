import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePageAccessComponent } from './delete-page-access.component';

describe('DeletePageAccessComponent', () => {
  let component: DeletePageAccessComponent;
  let fixture: ComponentFixture<DeletePageAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePageAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePageAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
