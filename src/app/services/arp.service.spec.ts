import { TestBed } from '@angular/core/testing';

import { ArpService } from './arp.service';

describe('ArpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArpService = TestBed.get(ArpService);
    expect(service).toBeTruthy();
  });
});
