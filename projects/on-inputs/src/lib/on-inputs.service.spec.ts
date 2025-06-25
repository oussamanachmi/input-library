import { TestBed } from '@angular/core/testing';

import { OnInputsService } from './on-inputs.service';

describe('OnInputsService', () => {
  let service: OnInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
