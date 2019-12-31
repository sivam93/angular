import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { ChartOptions } from 'chart.js';

import { Store } from '@ngrx/store';
import * as dashboardActions from "src/app/modules/collections/store/actions/dashboard.action";
import * as dashboardReducers from "src/app/modules/collections/store/reducers/dashboard";
import { productState } from 'src/app/modules/collections/store/reducers';


import * as untaggedActions from "src/app/modules/collections/store/actions/untagged.action";
import * as feActions from "src/app/modules/collections/store/actions/financialexceptions.action";
import * as MPMActions from "src/app/modules/collections/store/actions/mpm.action";
import * as srACtions from "src/app/modules/collections/store/actions/salaryrelease.action";
import * as spACtions from "src/app/modules/collections/store/actions/salaryprocess.action";

import * as untaggedReducers from "src/app/modules/collections/store/reducers/untagged";
import * as mpReducers from "src/app/modules/collections/store/reducers/mpm";
import * as feReducers from "src/app/modules/collections/store/reducers/financialexceptions";
import * as srReducers from 'src/app/modules/collections/store/reducers/salaryrelease';
import * as spReducers from 'src/app/modules/collections/store/reducers/salaryprocess';

import { UNTAGGED } from 'src/app/models/untagged';
import { FE } from 'src/app/models/financialexceptions';
import { MOSTPROBABLEMATCH } from 'src/app/models/mostprobablematch';
import { SALARYPROCESS } from 'src/app/models/salaryprocess';
import { SALARYRELEASE } from 'src/app/models/salaryrelease';
import { TokenService } from 'src/app/services/token/token.service';
import { DASHBOARD } from 'src/app/models/dashboard';
import { LoadmonthService } from 'src/app/services/loadmonth/loadmonth.service';
import { roles } from "src/app/api/api";
import { RolesService } from 'src/app/services/roles/roles.service';

import { pdccycle } from "src/app/models/pdc"; 

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit,AfterViewInit {
  
  public items:Array<string> = ['All','HDFC Bank','Teamlease'];

  heading: string = "Collections";
  totalInvoices : DASHBOARD;
  chartLoaded: boolean = false;
  pdccycle: pdccycle = {
    month:null,
    year:null
  };
  tableContent$: Observable<any[]>;
  loading$: Observable<boolean>;
  chartOptions:ChartOptions;
  loading:boolean;



  countUntagged$: Observable<UNTAGGED[]>;
  countMP$: Observable<MOSTPROBABLEMATCH[]>;
  countFE$: Observable<FE[]>;
  countSP$: Observable<SALARYPROCESS[]>;
  countSR$: Observable<SALARYRELEASE[]>;

  tokenInfo: any;
  roleid : number;

  totalCollections:any;
  totalClients:any;

  clientName:string = "All";
  periodType:string = "MTD";
  activeTab:string = "All Aging Payments";
  clientNameA:string = "All";
  periodTypeA:string = "MTD";

  lineChartData:any[];
  lineChartLabel:Date;
  getMonthList:string[];
  lineColors:any[];
  lineLegends:any[];

  roles:any = roles;

  anchor:boolean;
  manager:boolean;

  constructor(
    private store: Store<productState>,
    private router: Router,
    private monthService: LoadmonthService,
    private roleservice:RolesService
    ) {
    this.loading = false;

  }
  ngOnInit() {
    this.anchor = this.roleservice.getAnchorRoles();
    this.manager = this.roleservice.getManagerRoles();
    this.pdccycle = this.monthService.getPDC();
    this.loadStore(this.pdccycle);
    this.tableContent$ = this.store.select(dashboardReducers.getAllDASHBOARD);
    this.tableContent$.subscribe(data=>{
      this.totalCollections = data[1];
      this.totalClients = data[2];
    })
    this.loading$ = this.store.select(dashboardReducers.getDASHBOARDLoaded);



  }
  

  countALL():void{
    // this.countUntagged$ = this.store.select(untaggedReducers.getAllUntagged);
    // this.countMP$ = this.store.select(mpReducers.getAllMPM);
    // this.countFE$ = this.store.select(feReducers.getAllFE);
    // this.countSR$ = this.store.select(srReducers.getAllSR);
    // this.countSP$ = this.store.select(spReducers.getAllSP);

    // //this.countUntagged$ = this.store.select(untaggedReducers.getAllUntagged);
    // // this.countMP$ = this.store.select(mpReducers.getAllMPM);
    // // this.countFE$ = this.store.select(feReducers.getAllFE);
    // // this.countSR$ = this.store.select(srReducers.getAllSR);
    // // this.countSP$ = this.store.select(spReducers.getAllSP);
    
  }


  loadStore(pdc:pdccycle):void{
      this.store.dispatch(new dashboardActions.loadDashboardAction(pdc));
      this.store.dispatch(new untaggedActions.loadUntaggedAction(pdc));
      this.store.dispatch(new feActions.loadFEAction(pdc));
      this.store.dispatch(new MPMActions.loadMPMAction(pdc));
      this.store.dispatch(new srACtions.loadSTBRAction(pdc));
      this.store.dispatch(new spACtions.loadSPAction(pdc));
  }

  
  
  ngAfterViewInit():void
  {
    this.router.events.subscribe((event) => {
        if(event instanceof NavigationStart) {
            this.loading = true;
        }
        else if (
            event instanceof NavigationEnd || 
            event instanceof NavigationCancel
            ) {
            this.loading = false;
        }
    });
  }


  selected(value:any):void{
    this.clientName = value.text;
  }


  selectedPeriod(value:any):void{
    let monthArray:number[];
    let curMonth:number;
    this.periodType = value.text;
    this.lineChartLabel = new Date();
    curMonth = this.lineChartLabel.getMonth();
    this.lineColors = [
      {
        borderColor: '#ff5578',
        backgroundColor: 'transparent',
        pointBackgroundColor:'#41ceb1',
        pointBorderColor:'#41ceb1'
      },
      {
        borderColor: '#6180f4',
        backgroundColor: 'transparent',
        pointBackgroundColor:'#20b843',
        pointBorderColor:'#20b843'
      }
    ];
    this.lineLegends = [
      {
        colorClass:'color11',/** Add color class in _icons.scss */
        title:'Invoices'
      },
      {
        colorClass:'color12',/** Add color class in _icons.scss */
        title:'collections'
      }
    ];

    if(this.periodType === 'Half Year')
    {
      this.lineChartData = [
        [45,100,30,74,28,18],
        [25,50,50,24,88,38]
      ];
      monthArray = this.calculateYear(curMonth,6);
      this.getMonthList = this.monthService.getMonthArray(monthArray);
      
    }
    else if(this.periodType === 'Full Year')
    {
      this.lineChartData = [
        [45,100,30,74,28,18,67,23,34,41,23,54],
        [25,50,50,24,38,38,45,65,23,49,54,38]
      ];
      monthArray = this.calculateYear(curMonth,12);
      this.getMonthList = this.monthService.getMonthArray(monthArray);
    }
  }

  

  selectedClient(value:any):void{
    
  }

  selectedAging(value:any):void{
    this.clientNameA = value.text;
    
  }

  selectedAgingPeriod(value:any):void{
    let monthArray:number[];
    let curMonth:number;
    this.periodTypeA = value.text;
    this.lineChartLabel = new Date();
    curMonth = this.lineChartLabel.getMonth();
    this.lineColors = [
      {
        borderColor: '#ffab16',
        backgroundColor: 'transparent',
        pointBackgroundColor:'#4188ce',
        pointBorderColor:'#4188ce'
      }
    ];
    this.lineLegends = [
      {
        colorClass:'color13', /** Add color class in _icons.scss */
        title:'Amount'
      }
    ];
    if(this.periodTypeA === 'Half Year')
    {
      this.lineChartData = [
        [3,4,7,12,9,25]
      ];
      monthArray = this.calculateYear(curMonth,6);
      this.getMonthList = this.monthService.getMonthArray(monthArray);
      
    }
    else if(this.periodTypeA === 'Full Year')
    {
      this.lineChartData = [
        [3,4,7,12,9,25,3,4,7,12,9,25]
      ];
      monthArray = this.calculateYear(curMonth,12);
      this.getMonthList = this.monthService.getMonthArray(monthArray);
    }
  }
  

  showTab(data:string):void{
    this.activeTab = data;
  }


  calculateYear(curMonth:number,year:number)
  {
    let i:number;
    let totalMonth:number = 11;
    let res:number[] = [];
    for(i=0;i<year;i++)
    {
      if(curMonth  < 0)
      {
        res.push(totalMonth);
        totalMonth--;
      }
      else  
      {
        res.push(curMonth);
        curMonth--;
      }
    }
    return res;
  }

}
