import { Component, OnInit } from '@angular/core';
import * as srReducers from "src/app/modules/collections/store/reducers/salaryrelease";
import { productState } from 'src/app/modules/collections/store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SALARYRELEASE } from 'src/app/models/salaryrelease';
import { LoadmonthService } from 'src/app/services/loadmonth/loadmonth.service';


import * as srACtions from "src/app/modules/collections/store/actions/salaryrelease.action";
@Component({
  selector: 'app-salaryrelease',
  templateUrl: './salaryrelease.component.html',
  styleUrls: ['./salaryrelease.component.scss']
})
export class SalaryreleaseComponent implements OnInit {

  tableContent$: Observable<SALARYRELEASE[]>;
  loading$: Observable<boolean>;
  tableHeaders: any = [
    "Client Id",
    "Client Name",
    "Invoice Number",
    "Invoice Amount",
    "Type",
    "Invoice Date",
    "Associate Count",
    "Mode",
    "Status"
  ];
  tableContent: any;
  tableButton: string = "Accept";
  userStatus: any;
  show:boolean;
  errorMessage: string;
  p: number = 1;
  load:boolean;
  searchText: string;


  constructor(
    private store: Store<productState>,
    private monthService : LoadmonthService
  ) { }
  
  ngOnInit() {
    this.loadStore();
  }
  loadStore(){
    this.tableContent$ = this.store.select(srReducers.getAllSR);
    this.loading$ = this.store.select(srReducers.getSRLoading);
    // let month = this.monthService.getMonth();
    // this.store.dispatch(new srACtions.loadSTBRAction(month));
  }

  searchInput(data:string){
    this.searchText = data;
  }

}
