import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderobservableComponent } from './sliderobservable.component';

describe('SliderobservableComponent', () => {
  let component: SliderobservableComponent;
  let fixture: ComponentFixture<SliderobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderobservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
