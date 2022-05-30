import { TestBed } from '@angular/core/testing';

import { PinTypesService } from './pin-types.service';

describe('PinsService', () => {
  let service: PinTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
