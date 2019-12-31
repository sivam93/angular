import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as untaggedActions from "src/app/modules/collections/store/actions/untagged.action";
import * as feActions from "src/app/modules/collections/store/actions/financialexceptions.action";
import * as MPMActions from "src/app/modules/collections/store/actions/mpm.action";
import * as srACtions from "src/app/modules/collections/store/actions/salaryrelease.action";
import * as spACtions from "src/app/modules/collections/store/actions/salaryprocess.action";
import { productState } from 'src/app/modules/collections/store/reducers';
import { Store } from '@ngrx/store';
import { LoadmonthService } from 'src/app/services/loadmonth/loadmonth.service';

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
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})



export class HeadingComponent implements OnInit {

  @Input() heading: string;
  @Input() pdcCycle: boolean;
  @Input() backButton: boolean;
  @Input() escalation: boolean;

  backUrl:string;
  months : MONTH[];
  years: YEAR[] = [];
  month : number; 
  pdccycle : CYCLE = {
    year:null,
    month:null,
    selectedMonth:null,
    currentMonth:null,
    selectedYear:null,
    yearcount:10,
    error:false
  };
  
  monthName:string;
  url : string;
  activeUrl: string;
  getDate:Date;



  @Output() loadMonth: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private route: Router,
    private store: Store<productState>,
    private monthservice : LoadmonthService
  ) { }

  ngOnInit() {
    this.backUrl = (this.backButton) ? "/home/collections/" : "";
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
    this.months.unshift(def);
    if(localStorage.getItem("month") != undefined && localStorage.getItem("month") !== null)
     {
       this.pdccycle.month =  Number(localStorage.getItem("month")) - 1;
       this.pdccycle.selectedMonth = this.getMonthNo(this.pdccycle.month);
     }
    else 
    {
      this.pdccycle.month =  this.getDate.getMonth();
      this.pdccycle.selectedMonth = this.getMonthNo(this.pdccycle.month);

    }



    this.pdccycle.year = this.getDate.getFullYear();
    this.pdccycle.selectedYear = this.pdccycle.year;
    this.years = this.loadYears(this.pdccycle.selectedYear);

  }


  selectMonth(month:number)
  {
    if(month != -1)
    {
      this.pdccycle.selectedMonth = this.getMonthNo(month);
      this.pdccycle.currentMonth = Number(month) + 1;
      if(month != -2)
      {
        this.pdccycle.error = false;
        localStorage.setItem("month",String(this.pdccycle.currentMonth));
        this.loadMonth.emit({"year":this.pdccycle.year,"month":this.pdccycle.currentMonth});
      }
    }
  }


  selectYear(year:number)
  {
    this.pdccycle.selectedYear = this.pdccycle.year;
    this.selectMonth(-2);
    this.pdccycle.error = true;
  }


  loadYears(year:any)
  {
    let years : YEAR[] = [];
    for(let i = 0;i<this.pdccycle.yearcount;i++)
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

  // loadCategory():void{
  //   const month = Number(this.month)+1;
  //   this.url = this.route.url;
  //   if(this.url !== null && this.url !== "" && this.url !== undefined)
  //   {
  //     if(this.url.indexOf("untagged") !== -1)
  //     {
  //       this.store.dispatch(new untaggedActions.loadUntaggedAction(month));
  //     }
  //     else if(this.url.indexOf("mostprobablematch") !== -1)
  //     {
  //       this.store.dispatch(new MPMActions.loadMPMAction(month));
  //     }
  //     else if(this.url.indexOf("financialexceptions") !== -1)
  //     {
  //       this.store.dispatch(new feActions.loadFEAction(month));
  //     }
  //     else if(this.url.indexOf("salaryrelease") !== -1)
  //     {
  //       this.store.dispatch(new srACtions.loadSTBRAction(month));
  //     }
  //     else if(this.url.indexOf("salaryprocess") !== -1)
  //     {
  //       this.store.dispatch(new spACtions.loadSPAction(month));
  //     }
  //   }
  // }

}
