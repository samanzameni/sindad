import { TestBed } from '@angular/core/testing';

import { DomaincheckerService } from './domainchecker.service';

describe('DomaincheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomaincheckerService = TestBed.get(DomaincheckerService);
    expect(service).toBeTruthy();
  });
});
