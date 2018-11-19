import { TestBed, inject } from '@angular/core/testing';

import { PriceCompareService } from './price-compare.service';

describe('PriceCompareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceCompareService]
    });
  });

  it('should be created', inject([PriceCompareService], (service: PriceCompareService) => {
    expect(service).toBeTruthy();
  }));
});
