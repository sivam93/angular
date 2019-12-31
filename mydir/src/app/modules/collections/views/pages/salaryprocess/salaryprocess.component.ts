import { Component, OnInit } from '@angular/core';
import * as spReducers from "src/app/modules/collections/store/reducers/salaryprocess";
import * as spActions from "src/app/modules/collections/store/actions/salaryprocess.action";
import { productState } from 'src/app/modules/collections/store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SALARYPROCESS } from 'src/app/models/salaryprocess';
import { LoadmonthService } from 'src/app/services/loadmonth/loadmonth.service';

@Component({
  selector: 'app-salaryprocess',
  templateUrl: './salaryprocess.component.html',
  styleUrls: ['./salaryprocess.component.scss']
})
export class SalaryprocessComponent implements OnInit {

  tableContent$: Observable<SALARYPROCESS[]>;
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
    "Action"
  ];
  tableContent: any;
  tableButton: string = "View";
  showTable: boolean;
  userStatus: any;
  modal: any;
  show:boolean;
  errorMessage: string;
  p: number = 1;
  load:boolean;
  searchText: string;
  active: number;


  constructor(
    private store: Store<productState>,
    private monthService : LoadmonthService
  ){ }

  ngOnInit() {
    this.loadStore();
  }


  getInvoiceNo(data){

  }
  resModal(data){

  }
  collapseall(data:number){
    this.active = data;
  }

  loadStore(){
    // let month = this.monthService.getMonth();
    // this.store.dispatch(new spActions.loadSPAction(month));
    this.tableContent$ = this.store.select(spReducers.getAllSP);
    this.loading$ = this.store.select(spReducers.getSPLoading);
  }

  searchInput(data:string){
    this.searchText = data;
  }
}
