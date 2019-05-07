import { TestBed, inject } from '@angular/core/testing';

import { ApiHandlerService } from './api-handler.service';

describe('ApiHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiHandlerService]
    });
  });

  it('should be created', inject([ApiHandlerService], (service: ApiHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
