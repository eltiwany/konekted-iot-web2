import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiwLibraryComponent } from './hiw-library.component';

describe('HiwLibraryComponent', () => {
  let component: HiwLibraryComponent;
  let fixture: ComponentFixture<HiwLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiwLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiwLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
