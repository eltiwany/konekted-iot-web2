import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfigBoardsComponent } from './view-config-boards.component';

describe('ViewConfigBoardsComponent', () => {
  let component: ViewConfigBoardsComponent;
  let fixture: ComponentFixture<ViewConfigBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConfigBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfigBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
