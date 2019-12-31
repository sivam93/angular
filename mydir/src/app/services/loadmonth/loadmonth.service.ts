import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadmonthService {

  constructor() { }
  month:number;

  getPDC(){
    let getDate = new Date();
    if(localStorage.getItem("month") !== "undefined" && localStorage.getItem("month") !== null)
      this.month = Number(localStorage.getItem("month"));
    else
      this.month =  getDate.getMonth() + 1;


    return { 
      "month":this.month,
      "year":getDate.getFullYear()
    }  
  }


  loadMonth(){
    let months = [
      {
        name : "Select Month",
        value : -1,
        shortname:'sel'
      },
      {
        name : "January",
        value : 0,
        shortname:'Jan'
      },
      {
        name : "February",
        value : 1,
        shortname:'Feb'
      },
      {
        name : "March",
        value : 2,
        shortname:'Mar'
      },
      {
        name : "April",
        value : 3,
        shortname:'Apr'
      },
      {
        name : "May",
        value : 4,
        shortname:'May'
      },
      {
        name : "June",
        value : 5,
        shortname:'Jun'
      },
      {
        name : "July",
        value : 6,
        shortname:'Jul'
      },
      {
        name : "August",
        value : 7,
        shortname:'Aug'
      },
      {
        name : "September",
        value : 8,
        shortname:'Sep'
      },
      {
        name : "October",
        value : 9,
        shortname:'Oct'
      },
      {
        name : "November",
        value : 10,
        shortname:'Nov'
      },
      {
        name : "December",
        value : 11,
        shortname:'Dec'
      },
    ];
    return months;
  }

  getMonthArray(monthList){
    let res = [];
    let i:number;
      for(i=monthList.length;i>=0;i--)
      {
        this.loadMonth().map(data => {
          if(data.value == monthList[i])
          {
            res.push(data.shortname);
            return true;
          }
        });
      }
     return res; 
  }

}
