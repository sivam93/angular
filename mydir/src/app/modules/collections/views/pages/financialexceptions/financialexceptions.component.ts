import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoginService } from 'src/app/modules/login/services/login.service';
import { FE } from 'src/app/models/financialexceptions';

import * as feActions from "src/app/modules/collections/store/actions/financialexceptions.action";
import * as feReducers from "src/app/modules/collections/store/reducers/financialexceptions";
import { productState } from 'src/app/modules/collections/store/reducers';
import { LoadmonthService } from 'src/app/services/loadmonth/loadmonth.service';

@Component({
  selector: 'app-financialexceptions',
  templateUrl: './financialexceptions.component.html',
  styleUrls: ['./financialexceptions.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FinancialexceptionsComponent implements OnInit {

  tableContent$ : Observable<FE[]>
  loading$: Observable<boolean>;

  tableHeaders: any = [
    "Client Id",
    "Client Name",
    "Invoice Number",
    "Invoice Amount",
    "Type",
    "Invoice Date",
    "Mode",
    "Exception Type",
    "Action"
  ];
  tableButton: string = "View";
  modal: popupmodal;
  show:boolean;
  p: number = 1;

  searchText : string = "";
  feCat: string = 'All';
  active: number;

  constructor(
    private store: Store<productState>,
    private monthService : LoadmonthService
  ) 
  { 
    
  }

  ngOnInit() {
    this.loadStore();
  }

  

  
  collapseall(data:number){
    this.active = data;
  }


  loadStore(){
    // let month = this.monthService.getMonth();
    // this.store.dispatch(new feActions.loadFEAction(month));
    this.tableContent$ = this.store.select(feReducers.getAllFE);
    this.loading$ = this.store.select(feReducers.getFELoading);
  }

  searchInput(data:string){
    this.searchText = data;
  }
}
