import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoardsComponent } from './new-boards.component';

describe('NewBoardsComponent', () => {
  let component: NewBoardsComponent;
  let fixture: ComponentFixture<NewBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
