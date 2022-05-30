import { TestBed } from '@angular/core/testing';

import { HardwareManagerService } from './hardware-manager.service';

describe('HardwareManagerService', () => {
  let service: HardwareManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardwareManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
