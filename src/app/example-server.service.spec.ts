import { TestBed } from '@angular/core/testing';

import { ExampleServerService } from './example-server.service';

describe('ExampleServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleServerService = TestBed.get(ExampleServerService);
    expect(service).toBeTruthy();
  });
});
