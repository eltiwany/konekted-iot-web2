import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfigBoardsComponent } from './delete-config-boards.component';

describe('DeleteConfigBoardsComponent', () => {
  let component: DeleteConfigBoardsComponent;
  let fixture: ComponentFixture<DeleteConfigBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfigBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfigBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
