import { TestBed, inject } from '@angular/core/testing';

import { NgFancyLibService } from './ng-fancy-lib.service';

describe('NgFancyLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFancyLibService]
    });
  });

  it('should be created', inject([NgFancyLibService], (service: NgFancyLibService) => {
    expect(service).toBeTruthy();
  }));
});
