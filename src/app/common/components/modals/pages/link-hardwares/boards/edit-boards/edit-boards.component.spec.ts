import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoardsComponent } from './edit-boards.component';

describe('EditBoardsComponent', () => {
  let component: EditBoardsComponent;
  let fixture: ComponentFixture<EditBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
