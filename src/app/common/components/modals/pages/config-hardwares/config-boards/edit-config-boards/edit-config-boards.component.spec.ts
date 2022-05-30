import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConfigBoardsComponent } from './edit-config-boards.component';

describe('EditConfigBoardsComponent', () => {
  let component: EditConfigBoardsComponent;
  let fixture: ComponentFixture<EditConfigBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConfigBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConfigBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
