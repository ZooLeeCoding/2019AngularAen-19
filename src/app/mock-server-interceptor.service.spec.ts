import { TestBed } from '@angular/core/testing';

import { MockServerInterceptorService } from './mock-server-interceptor.service';

describe('MockServerInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockServerInterceptorService = TestBed.get(MockServerInterceptorService);
    expect(service).toBeTruthy();
  });
});
