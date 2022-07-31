import { TestBed } from '@angular/core/testing';

import { AppConfirmService } from './app-confirm.service';

describe('AppConfirmService', () => {
  let service: AppConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
