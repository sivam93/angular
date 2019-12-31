import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anchordetails',
  templateUrl: './anchordetails.component.html',
  styleUrls: ['./anchordetails.component.scss']
})
export class AnchordetailsComponent implements OnInit {
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
    }
  ];
  heading:string = "Assigned Anchor: Shashank Kumar";
  associateHeader:string[] = [
    "Client ID",
    "Corp ID",
    "Client Name",
    "Team",
    "General Manager",
    "Action"
  ];
  clientList:any[] = [
    {
      client_id:"OOCDL/E.I.CD Pvt Ltd",
      corp_id:"CORP/DP.C",
      client_name:"Dupont Internatiional",
      team:"ASamll",
      gen_manager:"Hitesh",
      action:'Disassociate'
    },
    {
      client_id:"OOCDL/E.I.CD Pvt Ltd",
      corp_id:"CORP/DP.C",
      client_name:"Dupont Internatiional",
      team:"ASamll",
      gen_manager:"Hitesh",
      action:'Disassociate'
    },
    {
      client_id:"OOCDL/E.I.CD Pvt Ltd",
      corp_id:"CORP/DP.C",
      client_name:"Dupont Internatiional",
      team:"ASamll",
      gen_manager:"Hitesh",
      action:'Disassociate'
    },
    {
      client_id:"OOCDL/E.I.CD Pvt Ltd",
      corp_id:"CORP/DP.C",
      client_name:"Dupont Internatiional",
      team:"ASamll",
      gen_manager:"Hitesh",
      action:'Disassociate'
    }
  ];

  loading:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
