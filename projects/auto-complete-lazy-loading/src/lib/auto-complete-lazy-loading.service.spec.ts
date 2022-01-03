import { TestBed } from '@angular/core/testing';

import { AutoCompleteLazyLoadingService } from './auto-complete-lazy-loading.service';

describe('AutoCompleteLazyLoadingService', () => {
  let service: AutoCompleteLazyLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoCompleteLazyLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
