import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBoardsComponent } from './delete-boards.component';

describe('DeleteBoardsComponent', () => {
  let component: DeleteBoardsComponent;
  let fixture: ComponentFixture<DeleteBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
