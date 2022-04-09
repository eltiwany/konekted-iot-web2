import { TestBed } from '@angular/core/testing';

import { ReportFunctionsService } from './report-functions.service';

describe('ReportFunctionsService', () => {
  let service: ReportFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
