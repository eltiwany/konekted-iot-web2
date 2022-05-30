import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConfigBoardsComponent } from './new-config-boards.component';

describe('NewConfigBoardsComponent', () => {
  let component: NewConfigBoardsComponent;
  let fixture: ComponentFixture<NewConfigBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConfigBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConfigBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
