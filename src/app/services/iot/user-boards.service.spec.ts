import { TestBed } from '@angular/core/testing';

import { UserBoardsService } from './user-boards.service';

describe('UserBoardsService', () => {
  let service: UserBoardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBoardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
