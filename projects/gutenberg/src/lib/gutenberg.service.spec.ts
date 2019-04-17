import { TestBed } from '@angular/core/testing';

import { GutenbergService } from './gutenberg.service';

describe('GutenbergService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GutenbergService = TestBed.get(GutenbergService);
    expect(service).toBeTruthy();
  });
});
