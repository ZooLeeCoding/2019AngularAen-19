import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ExampleServerService } from './example-server.service';

describe('ExampleServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ExampleServerService = TestBed.get(ExampleServerService);
    expect(service).toBeTruthy();
  });
});
