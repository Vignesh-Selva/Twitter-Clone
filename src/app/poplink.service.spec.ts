import { TestBed } from '@angular/core/testing';

import { PoplinkService } from './poplink.service';

describe('PoplinkService', () => {
  let service: PoplinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoplinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
