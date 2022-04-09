import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMd4Component } from './card-md4.component';

describe('CardMd4Component', () => {
  let component: CardMd4Component;
  let fixture: ComponentFixture<CardMd4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMd4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMd4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
