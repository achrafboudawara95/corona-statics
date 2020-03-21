import { TestBed } from '@angular/core/testing';

import { CoronaService } from './corona-service';

describe('CoronaServiceService', () => {
  let service: CoronaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
