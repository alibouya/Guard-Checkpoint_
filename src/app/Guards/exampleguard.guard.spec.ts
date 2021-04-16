import { TestBed } from '@angular/core/testing';

import { ExampleguardGuard } from './exampleguard.guard';

describe('ExampleguardGuard', () => {
  let guard: ExampleguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExampleguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
