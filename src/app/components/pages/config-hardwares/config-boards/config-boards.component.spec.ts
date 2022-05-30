import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigBoardsComponent } from './config-boards.component';

describe('ConfigBoardsComponent', () => {
  let component: ConfigBoardsComponent;
  let fixture: ComponentFixture<ConfigBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
