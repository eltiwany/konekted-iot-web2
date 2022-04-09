import { TestBed } from '@angular/core/testing';

import { HttpHrmService } from './http-hrm.service';

describe('HttpHrmService', () => {
  let service: HttpHrmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHrmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
