import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiwLinkBoardComponent } from './hiw-link-board.component';

describe('HiwLinkBoardComponent', () => {
  let component: HiwLinkBoardComponent;
  let fixture: ComponentFixture<HiwLinkBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiwLinkBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiwLinkBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
