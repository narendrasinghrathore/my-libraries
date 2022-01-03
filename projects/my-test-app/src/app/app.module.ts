import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxAutoCompleteLazyLoadingModule} from 'ngx-auto-complete-lazy-loading';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAutoCompleteLazyLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
