import { TestBed } from '@angular/core/testing';

import { UncompletedTasksService } from './uncompleted-tasks.service';

describe('UncompletedTasksService', () => {
  let service: UncompletedTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UncompletedTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
