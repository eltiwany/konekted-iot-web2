import { TestBed } from '@angular/core/testing';

import { ExportOptionsService } from './export-options.service';

describe('ExportOptionsService', () => {
  let service: ExportOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
