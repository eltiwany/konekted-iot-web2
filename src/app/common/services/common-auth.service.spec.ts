import { TestBed } from '@angular/core/testing';

import { CommonAuthService } from './common-auth.service';

describe('CommonAuthService', () => {
  let service: CommonAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
