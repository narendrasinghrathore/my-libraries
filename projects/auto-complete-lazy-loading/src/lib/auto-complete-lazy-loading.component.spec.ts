import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteLazyLoadingComponent } from './auto-complete-lazy-loading.component';

describe('AutoCompleteLazyLoadingComponent', () => {
  let component: AutoCompleteLazyLoadingComponent;
  let fixture: ComponentFixture<AutoCompleteLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCompleteLazyLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
