import { Component, OnInit } from '@angular/core';

import * as dashboardActions from "src/app/modules/collections/store/actions/dashboard.action";
import * as dashboardReducers from "src/app/modules/collections/store/reducers/dashboard";
import { productState } from 'src/app/modules/collections/store/reducers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadmonthService } from 'src/app/services/loadmonth/loadmonth.service';
import { pdccycle } from 'src/app/models/pdc';


interface assoclist {
  assoc_id:string,
  assoc_name:string,
  inv_date:string,
  status:string,
  joining_date:string,
  client_id:string,
  client_name:string,
  assoc_ops_team:string,
  crop_id:string,
  general_manager:string,
  team:string
}

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.scss'],
  host:{
    '(document:click)': 'onWindowClick($event)',
  }
})
export class ClientdetailsComponent implements OnInit {

  constructor(
    private store: Store<productState>,
    private monthService: LoadmonthService
  ) {}
  month: pdccycle;
  chartLoaded:boolean = false;
  heading:string = "Yellow Chalk";
  loading$: Observable<boolean>;
  tableContent$: Observable<any[]>;
  tableHeaders:string[] = [
    "Input",
    "Release Information",
    "Invoice",
    "Payment Receive",
    "Payout"
  ];

  assocInfo:assoclist = {
    assoc_id:null,
    assoc_name:null,
    inv_date:null,
    status:null,
    joining_date:null,
    client_id:null,
    client_name:null,
    assoc_ops_team:null,
    crop_id:null,
    general_manager:null,
    team:null
  };
  assocPopup:boolean = false;
  assignList:boolean = false; 
  clientPayDated:any[] = [
    {
      targetdate:"25/03/2019",
      actiondate:"25/03/2019",
      status:"pending",
      agingdays:2
    },
    {
      targetdate:"25/03/2019",
      actiondate:"25/03/2019",
      status:"pending",
      agingdays:2
    },
    {
      targetdate:"25/03/2019",
      actiondate:"25/03/2019",
      status:"pending",
      agingdays:2
    },
    {
      targetdate:"25/03/2019",
      actiondate:"25/03/2019",
      status:"pending",
      agingdays:2
    },
    {
      targetdate:"25/03/2019",
      actiondate:"25/03/2019",
      status:"pending",
      agingdays:2
    }
  ];

  associateHeader:any[] = [
    "Associcate ID",
    "Associate Name",
    "Invoice Date",
    "Status",
    "Action"
  ]
  associateList:assoclist[] = [
    {
      assoc_id:"TL 123_Asha",
      assoc_name:"Asha Jain",
      inv_date:"15/01/2019",
      status:"Active",
      joining_date:"15/01/2019",
      client_id:"THGSHGS38636",
      client_name:"Yellowchalk UI/UX Design Studio",
      assoc_ops_team:"Shashank Kumar",
      crop_id:"Crop/DP.C",
      general_manager:"Hitesh",
      team:"Asmall"
    },
    {
      assoc_id:"TL 123_Tilak",
      assoc_name:"Tilak",
      inv_date:"15/01/2019",
      status:"Active",
      joining_date:"15/01/2019",
      client_id:"THGSHGS38636",
      client_name:"Yellowchalk UI/UX Design Studio",
      assoc_ops_team:"Shashank Kumar",
      crop_id:"Crop/DP.C",
      general_manager:"Hitesh",
      team:"Asmall"
    },
    {
      assoc_id:"TL 123_Prashant",
      assoc_name:"Prashant",
      inv_date:"15/01/2019",
      status:"Active",
      joining_date:"15/01/2019",
      client_id:"THGSHGS38636",
      client_name:"Yellowchalk UI/UX Design Studio",
      assoc_ops_team:"Shashank Kumar",
      crop_id:"Crop/DP.C",
      general_manager:"Hitesh",
      team:"Asmall"
    },
    {
      assoc_id:"TL 123_Deepthi",
      assoc_name:"Deepthi",
      inv_date:"15/01/2019",
      status:"Active",
      joining_date:"15/01/2019",
      client_id:"THGSHGS38636",
      client_name:"Yellowchalk UI/UX Design Studio",
      assoc_ops_team:"Shashank Kumar",
      crop_id:"Crop/DP.C",
      general_manager:"Hitesh",
      team:"Asmall"
    }
  ];

  loading:boolean = true;

  ngOnInit() {
    window.scroll(0,0);
    this.month = this.monthService.getPDC();
    this.loadStore(this.month);
    this.loading$ = this.store.select(dashboardReducers.getDASHBOARDLoaded);
    this.tableContent$ = this.store.select(dashboardReducers.getAllDASHBOARD);
  }

  loadStore(month:pdccycle):void{
    this.store.dispatch(new dashboardActions.loadDashboardAction(month));
  }

  assoc_popup(data:assoclist):void
  {
    this.assocPopup = true;
    this.assocInfo = data;
  }
  closePopup():void
  {
    this.assocPopup = false;
  }
  toggleAssign($event):void
  {
    $event.stopPropagation();
    $event.preventDefault();
    this.assignList = !this.assignList;
  }
  onWindowClick($event)
  {
    this.assignList = false;
  }
}
