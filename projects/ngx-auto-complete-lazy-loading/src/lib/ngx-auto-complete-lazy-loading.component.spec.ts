import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAutoCompleteLazyLoadingComponent } from './ngx-auto-complete-lazy-loading.component';

describe('NgxAutoCompleteLazyLoadingComponent', () => {
  let component: NgxAutoCompleteLazyLoadingComponent;
  let fixture: ComponentFixture<NgxAutoCompleteLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAutoCompleteLazyLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAutoCompleteLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
