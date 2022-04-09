import { TestBed } from '@angular/core/testing';

import { PermissionsGuardService } from './permissions-guard.service';

describe('PermissionsGuardService', () => {
  let service: PermissionsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
