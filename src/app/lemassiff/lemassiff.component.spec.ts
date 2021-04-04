import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemassiffComponent } from './lemassiff.component';

describe('LemassiffComponent', () => {
  let component: LemassiffComponent;
  let fixture: ComponentFixture<LemassiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemassiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemassiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
