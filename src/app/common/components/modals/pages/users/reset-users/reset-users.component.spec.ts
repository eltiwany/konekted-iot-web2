import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetUsersComponent } from './reset-users.component';

describe('ResetUsersComponent', () => {
  let component: ResetUsersComponent;
  let fixture: ComponentFixture<ResetUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
