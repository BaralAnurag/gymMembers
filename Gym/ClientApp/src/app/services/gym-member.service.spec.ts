import { TestBed } from '@angular/core/testing';

import { GymMemberService } from './gym-member.service';

describe('GymMemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymMemberService = TestBed.get(GymMemberService);
    expect(service).toBeTruthy();
  });
});
