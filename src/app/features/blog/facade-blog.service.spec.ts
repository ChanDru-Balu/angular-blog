import { TestBed } from '@angular/core/testing';

import { FacadeBlogService } from './facade-blog.service';

describe('FacadeBlogService', () => {
  let service: FacadeBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
