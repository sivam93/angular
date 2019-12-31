import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignclients',
  templateUrl: './assignclients.component.html',
  styleUrls: ['./assignclients.component.scss']
})
export class AssignclientsComponent implements OnInit {

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
      "text":"Assign Clients",
      "link":""
    }
  ];
  heading:string = "Assign Clients";
  associateHeader:string[] = [
    "Client ID",
    "Corp ID",
    "Client Name",
    "Team",
    "General Manager"
  ];
  clientList:any[] = [
    {
      client_id:"OOCDL/E.I.CD Pvt Ltd",
      corp_id:"CORP/DP.C",
      client_name:"Dupont Internatiional",
      team:"ASamll",
      gen_manager:"Hitesh"
    },
    {
      client_id:"OOCDL/E.I.CD Pvt Ltd",
      corp_id:"CORP/DP.C",
      client_name:"Dupont Internatiional",
      team:"ASamll",
      gen_manager:"Hitesh"
    },
    {
      client_id:"OOCDL/E.I.CD Pvt Ltd",
      corp_id:"CORP/DP.C",
      client_name:"Dupont Internatiional",
      team:"ASamll",
      gen_manager:"Hitesh"
    },
    {
      client_id:"OOCDL/E.I.CD Pvt Ltd",
      corp_id:"CORP/DP.C",
      client_name:"Dupont Internatiional",
      team:"ASamll",
      gen_manager:"Hitesh"
    }
  ];

  loading:boolean = true;
  ngOnInit() {
  }

}
