import { TestBed } from '@angular/core/testing';

import { SalaryAdService } from './salary-ad.service';

describe('SalaryAdService', () => {
  let service: SalaryAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
