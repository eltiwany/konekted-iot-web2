import { TestBed } from '@angular/core/testing';

import { InactiveService } from './inactive.service';

describe('InactiveService', () => {
  let service: InactiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InactiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
