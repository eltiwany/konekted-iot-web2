import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiwMncComponent } from './hiw-mnc.component';

describe('HiwMncComponent', () => {
  let component: HiwMncComponent;
  let fixture: ComponentFixture<HiwMncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiwMncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiwMncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
