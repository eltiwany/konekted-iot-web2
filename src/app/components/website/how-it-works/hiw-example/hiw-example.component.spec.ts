import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiwExampleComponent } from './hiw-example.component';

describe('HiwExampleComponent', () => {
  let component: HiwExampleComponent;
  let fixture: ComponentFixture<HiwExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiwExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiwExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
