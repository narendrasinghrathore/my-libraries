import { TestBed } from '@angular/core/testing';

import { NgxAutoCompleteLazyLoadingService } from './ngx-auto-complete-lazy-loading.service';

describe('NgxAutoCompleteLazyLoadingService', () => {
  let service: NgxAutoCompleteLazyLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAutoCompleteLazyLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
