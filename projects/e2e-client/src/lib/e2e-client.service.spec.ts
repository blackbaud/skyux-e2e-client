import { TestBed } from '@angular/core/testing';

import { E2eClientService } from './e2e-client.service';

describe('E2eClientService', () => {
  let service: E2eClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(E2eClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
