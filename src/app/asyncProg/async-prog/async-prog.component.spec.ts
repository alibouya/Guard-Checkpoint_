import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncProgComponent } from './async-prog.component';

describe('AsyncProgComponent', () => {
  let component: AsyncProgComponent;
  let fixture: ComponentFixture<AsyncProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncProgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
