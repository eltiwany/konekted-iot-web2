import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAutomationsComponent } from './delete-automations.component';

describe('DeleteAutomationsComponent', () => {
  let component: DeleteAutomationsComponent;
  let fixture: ComponentFixture<DeleteAutomationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAutomationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAutomationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
