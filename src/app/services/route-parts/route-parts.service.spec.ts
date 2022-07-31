import { TestBed } from '@angular/core/testing';

import { RoutePartsService } from './route-parts.service';

describe('RoutePartsService', () => {
  let service: RoutePartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutePartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
