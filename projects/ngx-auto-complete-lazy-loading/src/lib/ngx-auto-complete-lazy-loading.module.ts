import { NgModule } from '@angular/core';
import { NgxAutoCompleteLazyLoadingComponent } from './ngx-auto-complete-lazy-loading.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    NgxAutoCompleteLazyLoadingComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  exports: [
    NgxAutoCompleteLazyLoadingComponent
  ]
})
export class NgxAutoCompleteLazyLoadingModule { }
