import { TestBed } from '@angular/core/testing';

import { PosttourService } from './posttour.service';

describe('PosttourService', () => {
  let service: PosttourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosttourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
