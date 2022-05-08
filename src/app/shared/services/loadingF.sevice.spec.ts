import { TestBed } from '@angular/core/testing';

import { LoadingFService } from './loadingF.service';

describe('FakeLoadingService', () => {
  let service: LoadingFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
