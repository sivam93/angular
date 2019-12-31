import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core'
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token/token.service';


import { productState } from 'src/app/modules/collections/store/reducers';
import { Store } from '@ngrx/store';
import { LoadmonthService } from 'src/app/services/loadmonth/loadmonth.service';


import * as dashboardReducers from "src/app/modules/collections/store/reducers/dashboard";
import {roles} from "src/app/api/api";

interface navItems {
  label: string;
  link: string;
  index: number;
  count: any;
}
interface MONTH {
  name: string;
  value: number;
}

interface CYCLE{
  year:number;
  month:number;
  selectedMonth : string;
  currentMonth:number;
  selectedYear:number;
  yearcount:number;
  error:boolean;
}
interface YEAR{
  value:number;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() heading: string;
  @Input() MothSelector:boolean;
  @Input() selectType:string
 
  tokenInfo: any;
  roleid : number;
  navLinks: navItems[];
  navLinksAll:navItems[];
  navLinksAnchor:navItems[];
  navLinksReconcileAnchor:navItems[]; 
  months : MONTH[];
  years: YEAR[] = [];
  month : number; 
  r2rcycle : CYCLE = {
    year:null,
    month:null,
    selectedMonth:null,
    currentMonth:null,
    selectedYear:null,
    yearcount:10,
    error:false,
  };
  
  monthName:string;
  url : string;
  activeUrl: string;
  getDate:Date
  filter:Boolean;
  selected:any;
   reportName:any

  tableContent$: Observable<any[]>;
  @Output() reports = new EventEmitter<any>();
  @Output() download=new EventEmitter<any>();
  @Output() selectedMonths= new EventEmitter<any>();
  constructor(
    private token: TokenService,
    private store: Store<productState>,
    private monthservice : LoadmonthService,
  
    ) { }

    ngOnInit() {
      if(this.tokenInfo == undefined || this.tokenInfo === null)
      {
        this.tokenInfo = this.token.getDecodedAccessToken();
        this.roleid = this.tokenInfo.Role_id;
      }
      this.tableContent$ = this.store.select(dashboardReducers.getAllDASHBOARD);
      this.tableContent$.subscribe(data=>{
        this.navLinksReconcileAnchor = [  
        {
          label: 'Final Out Reports',
          link: 'sss',//'/sss',
          index: 2,
          count:0
      },
      {
        label: 'Consolidated Reports',
        link: '/reconcillation/uploads',//'/reconcillation/consolidated',
        index: 1,
        count:  0
      },
      {
        label: 'Uploads',
        link: '/reconcillation/uploads',
        index: 3,
        count:  0
      },
      ];
        if(this.roleid == roles.OpsAnchor || this.roleid == roles.OpsManager)
        {
          this.navLinks = [
           // ...this.navLinksReconcileAnchor
          ];
        }
        else if(this.roleid == roles.FinanceAnchor || this.roleid == roles.FinanceManager){
          this.navLinks = [
           // ...this.navLinksReconcileAnchor
          ];
        }
      })
      this.getDate = new Date();
      this.loadpdc_cycle();
    }
    loadpdc_cycle():void{
      let def = {
        name:"--Select Month--",
        value:-2,
        shortname:'select'
      }
      
      this.months = this.monthservice.loadMonth();
    //  this.months.unshift(def);
      this.r2rcycle.month=this.months[0].value;
    /*  if(localStorage.getItem("month") != undefined && localStorage.getItem("month") !== null)
       {
         this.r2rcycle.month =  Number(localStorage.getItem("month")) - 1;
         this.r2rcycle.selectedMonth = this.getMonthNo(this.r2rcycle.month);
       }
      else 
      {
        this.r2rcycle.month =  this.getDate.getMonth();
        this.r2rcycle.selectedMonth = this.getMonthNo(this.r2rcycle.month);

      }
      this.r2rcycle.year = this.getDate.getFullYear();
      this.r2rcycle.selectedYear = this.r2rcycle.year;
      this.years = this.loadYears(this.r2rcycle.selectedYear);
      */
  
    }
  
     onChange(event) { 
      this.reportName = event.target.value;
      this.reports.emit(this.reportName);
    }
    loadYears(year:any)
    {
      let years : YEAR[] = [];
      for(let i = 0;i<this.r2rcycle.yearcount;i++)
      {
        years.push({'value':year--});
      } 
      return years;
    }
  
    getMonthNo(month:number){
      this.months.filter((data:MONTH) => {
        if(data.value == month)
        {
          this.monthName = data.name;
        }
      })
      return this.monthName;
    }
  
    selectMonth(month:number)
    {
      this.selectedMonths.emit(month);
      if(month != -1)
      {
        this.r2rcycle.selectedMonth = this.getMonthNo(month);
        this.r2rcycle.currentMonth = Number(month) + 1;
        if(month != -2)
        {
          this.r2rcycle.error = false;
          localStorage.setItem("month",String(this.r2rcycle.currentMonth));
        }
      }
     
    }
  
    selectYear(year:number)
    {
      this.r2rcycle.selectedYear = this.r2rcycle.year;
      this.selectMonth(-2);
      this.r2rcycle.error = true;
    }
    samplsse(){

      console.log("sss");
    }
    sample(){
     this.download.emit("Consolidated")
    }

}
