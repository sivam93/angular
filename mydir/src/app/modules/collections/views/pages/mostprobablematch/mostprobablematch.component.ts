import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { MOSTPROBABLEMATCH } from 'src/app/models/mostprobablematch';


import * as MPMActions from "src/app/modules/collections/store/actions/mpm.action";
import * as MPMReducers from "src/app/modules/collections/store/reducers/mpm";
import * as dashboardActions from "src/app/modules/collections/store/actions/dashboard.action";
import { productState } from 'src/app/modules/collections/store/reducers';
import { LoadmonthService } from 'src/app/services/loadmonth/loadmonth.service';




@Component({
  selector: 'app-mostprobablematch',
  templateUrl: './mostprobablematch.component.html',
  styleUrls: ['./mostprobablematch.component.scss']
})
export class MostprobablematchComponent implements OnInit {

  tableContent$: Observable<MOSTPROBABLEMATCH[]>;
  loading$: Observable<boolean>;
  modalLoading$: Observable<boolean>;
  modalLoading:boolean;

  tableHeaders: any = [
    "Client Id",
    "Client Name",
    "Invoice Number",
    "Invoice Amount",
    "Type",
    "Invoice Date",
    "Mode",
    "Action"
  ];
  tableButton: string = "Tag Payment";
  modal: popupmodal;
  show:boolean = false;
  p: number = 1;
  
  searchText : string = "";
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
  
  getInvoiceNo(data: MOSTPROBABLEMATCH){
    this.store.dispatch(new MPMActions.deleteMPMAction(data));
    this.store.dispatch(new dashboardActions.loadDashboardMPMAction());
    this.show = true;
    this.modal = {
      modalInvoiceNo : data.invoice_no,
      modalShow : true,
      text:"Successfully Tagged to the Payment"
    };
    this.modalLoading$ = this.store.select(MPMReducers.getMPMModalLoaded);
    this.modalLoading$.subscribe(val => {
      if(val)
      {
        this.modalLoading = val;
      }
    }); 
  }

  resModal(data: boolean)
  {
    this.show = data;
  }

  collapseall(data: number){
    this.active = data;
  }

  loadStore(){
    // let month = this.monthService.getMonth();
    // this.store.dispatch(new MPMActions.loadMPMAction(month));
    this.tableContent$ = this.store.select(MPMReducers.getAllMPM);
    this.loading$ = this.store.select(MPMReducers.getMPMLoading);
  }

  searchInput(data:string){
    this.searchText = data;
  }

}
