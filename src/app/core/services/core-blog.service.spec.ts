import { TestBed } from '@angular/core/testing';

import { CoreBlogService } from './core-blog.service';

describe('CoreBlogService', () => {
  let service: CoreBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
