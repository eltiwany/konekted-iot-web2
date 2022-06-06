import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiwConnectComponent } from './hiw-connect.component';

describe('HiwConnectComponent', () => {
  let component: HiwConnectComponent;
  let fixture: ComponentFixture<HiwConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiwConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiwConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
