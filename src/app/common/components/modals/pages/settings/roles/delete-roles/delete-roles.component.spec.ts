import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRolesComponent } from './delete-roles.component';

describe('DeleteRolesComponent', () => {
  let component: DeleteRolesComponent;
  let fixture: ComponentFixture<DeleteRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
