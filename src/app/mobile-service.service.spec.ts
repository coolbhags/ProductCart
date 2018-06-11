import { TestBed, inject } from '@angular/core/testing';

import { MobileServiceService } from './mobile-service.service';

describe('MobileServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileServiceService]
    });
  });

  it('should be created', inject([MobileServiceService], (service: MobileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
