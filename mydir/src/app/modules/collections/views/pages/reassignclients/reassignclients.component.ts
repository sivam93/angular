import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reassignclients',
  templateUrl: './reassignclients.component.html',
  styleUrls: ['./reassignclients.component.scss']
})
export class ReassignclientsComponent implements OnInit {

  constructor() { }

  data:any[] = [
    {
      "text":"Collection",
      "link":"/home/collections/"
    },
    {
      "text":"Yellow Chalk",
      "link":"/home/collections/clientdetails/123"
    },
    {
      "text":"Shashank Kumar",
      "link":"/home/collections/anchordetails/123/123"
    },
    {
      "text":"Reassign Client",
      "link":""
    }
  ];
  heading:string = "Reassign Client to Another Anchor";
  associateHeader:string[] = [
    "Employee ID",
    "Employee Name",
    "Status",
    "Action"
  ];
  clientList:any[] = [
    {
      emp_id:"8226GSHGS",
      emp_name:"Shanshank",
      status:"Assigned",
      action:"Disassociate"
    },
    {
      emp_id:"8226GSHGS",
      emp_name:"Shanshank",
      status:"Assigned",
      action:"Disassociate"
    },
    {
      emp_id:"8226GSHGS",
      emp_name:"Shanshank",
      status:"Assigned",
      action:"Disassociate"
    },
    {
      emp_id:"8226GSHGS",
      emp_name:"Shanshank",
      status:"Assigned",
      action:"Disassociate"
    }
  ];
  ngOnInit() {
  }

}
