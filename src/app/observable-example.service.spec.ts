import { TestBed } from '@angular/core/testing';

import { ObservableExampleService } from './observable-example.service';

describe('ObservableExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservableExampleService = TestBed.get(ObservableExampleService);
    expect(service).toBeTruthy();
  });
});
