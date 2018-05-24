import { TestBed, inject } from '@angular/core/testing';
import { InMemoryMockDataService } from './in-memory-mock-data.service';

describe('InMemoryMockDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryMockDataService]
    });
  });

  it('should be created', inject([InMemoryMockDataService], (service: InMemoryMockDataService) => {
    expect(service).toBeTruthy();
  }));
});
