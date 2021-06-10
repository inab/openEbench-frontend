import { TestBed, inject } from '@angular/core/testing';
import { ScientificService } from './scientific.service';

describe('ScientificService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScientificService]
    });
  });

  it('should be created', inject([ScientificService], (service: ScientificService) => {
    expect(service).toBeTruthy();
  }));
});
