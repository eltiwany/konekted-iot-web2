import { TestBed } from '@angular/core/testing';

import { ActuatorsService } from './actuators.service';

describe('ActuatorsService', () => {
  let service: ActuatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActuatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
