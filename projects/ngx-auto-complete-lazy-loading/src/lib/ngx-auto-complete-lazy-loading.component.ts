import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-auto-complete-lazy-loading',
  templateUrl:'./ngx-auto-complete-lazy-loading.component.html',
  styleUrls:['./ngx-auto-complete-lazy-loading.component.scss',]
})
export class NgxAutoCompleteLazyLoadingComponent implements OnInit {
  @Input('list')
  filteredOptions : any[] = []
  ngOnInit() {
  }

}
