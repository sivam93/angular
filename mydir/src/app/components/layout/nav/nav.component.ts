import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {
  navLinks:any[];
  constructor() {
    
   }
  
  ngOnInit() {
    this.navLinks = [
      {
        name:"Dashboard",
        link:" ",///dashboard",
        icon:"dashboard"
      },
      {
        name:"Release",
        link:" ",//"/release",
        icon:"release"
      },
      {
        name:"Reconcillation",
        link:"/reconcillation",
        icon:"reconcile"
      }
    ]
  }

  

}
