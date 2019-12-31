import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import * as feActions from "src/app/modules/collections/store/actions/financialexceptions.action";
import { Store } from '@ngrx/store';
import { productState } from 'src/app/modules/collections/store/reducers';
@Component({
  selector: 'app-fe-list',
  templateUrl: './fe-list.component.html',
  styleUrls: ['./fe-list.component.scss'],
})
export class FeListComponent implements OnInit {
  @Input() exception :any;
  @Input() roleid:number;
  @Input() single: boolean;
  @Input() showException: boolean;
  @Input() exData:any;
  @Output() invoiceNo: EventEmitter<any> = new EventEmitter<any>();

  modal:any;
  constructor(
    private store: Store<productState>
  ) { }

  ngOnInit() {
  }

  getInvoiceno(data:any):void
  {
    this.invoiceNo.emit(data);
    if(data.status == 3 || data.status == 1)
      this.store.dispatch(new feActions.processFEAction(data));
    else 
      this.store.dispatch(new feActions.updateFEAction(data));
  }

}
