import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { UNTAGGED } from 'src/app/models/untagged';

import * as untaggedActions from "src/app/modules/collections/store/actions/untagged.action";
import * as untaggedReducers from "src/app/modules/collections/store/reducers/untagged";
import * as dashboardActions from "src/app/modules/collections/store/actions/dashboard.action";
import { productState } from 'src/app/modules/collections/store/reducers';
import { LoadmonthService } from 'src/app/services/loadmonth/loadmonth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { RolesService } from 'src/app/services/roles/roles.service';


@Component({
  selector: 'app-untagged',
  templateUrl: './untagged.component.html',
  styleUrls: ['./untagged.component.scss'],
})
export class UntaggedComponent implements OnInit {

  tableContent$: Observable<UNTAGGED[]>;
  loading$: Observable<boolean>;
  modalLoading$: Observable<boolean>;
  modalLoading:boolean;
  tableHeaders:string[] = [];
  commonHeader: string[] = [
    "Client Id",
    "Client Name",
    "Invoice Number",
    "Invoice Amount",
    "Invoice Date",
  ];
  actionHeader:string[] = [
    "Action"
  ]
  tableButton: string = "Tag Payment";
  modal: popupmodal;
  show:boolean = false;
  p: number = 1;

  searchText : string = "";
  active: number;

  anchor:boolean;
  manager:boolean;


  
  constructor(
    private store: Store<productState>,
    private roleservice: RolesService
  ) 
  {
  }
  ngOnInit() {
    this.anchor = this.roleservice.getAnchorRoles();
    this.manager = this.roleservice.getManagerRoles();
    if(this.manager) {
      let managerHeader:string[] = [
        "Assigned Anchor",
        "Payment Status",
        "Payment Aging Days"
      ]
      this.tableHeaders = [
        ...this.commonHeader,
        ...managerHeader,
        ...this.actionHeader
      ]
    }
    else if(this.anchor)
    {
      this.tableHeaders = [
        ...this.commonHeader,
        ...this.actionHeader
      ]
    } 
    this.loadStore();
  }

  

  getInvoiceNo(data:UNTAGGED){
    this.store.dispatch(new untaggedActions.deleteUntaggedAction(data));
    this.store.dispatch(new dashboardActions.loadDashboardUntaggedAction());

    this.modal = {
      modalInvoiceNo : data.invoice_no,
      modalShow : true,
      text:"Successfully Tagged to the Payment"
    };
    this.show = true;

    this.modalLoading$ = this.store.select(untaggedReducers.getUntaggedModalLoaded);
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

  collapseall(data:number){
    this.active = data;
  }

  loadStore(){
    this.tableContent$ = this.store.select(untaggedReducers.getAllUntagged);
    this.loading$ = this.store.select(untaggedReducers.getUntaggedLoading);
    //let month = this.monthService.getMonth();
    //this.store.dispatch(new untaggedActions.loadUntaggedAction(month));
  }
  searchInput(data:string){
    this.searchText = data;
  }
  
}
