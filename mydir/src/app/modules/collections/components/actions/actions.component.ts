import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  host:{
    '(document:click)': 'onWindowClick($event)',
  }
})
export class ActionsComponent implements OnInit {
  @Input() index:number;
  @Input() clientid:string;
  @Output() action:EventEmitter<any> = new EventEmitter<any>();
  navLinks:any[] = [];
  menuOpen:boolean;
  active:boolean;
  navActive:number;
  constructor() { }

  ngOnInit() {
    this.navLinks = [
      {
        text:'Tag Payment',
        link:''
      },
      {
        text:'View Client Details',
        link:'/home/collections/clientdetails/'+this.clientid
      },
      {
        text:'View Anchor Details',
        link:'/home/collections/anchordetails/'+this.clientid+'/'+this.clientid
      },
      {
        text:'Reassign client to another anchor',
        link:'/home/collections/reassignclients/'+this.clientid+'/'+this.clientid
      }
    ]
  }

  slide(){
    this.action.emit(this.index);
  }

  openAction($event){
    $event.preventDefault();
    $event.stopPropagation();
    this.menuOpen = !this.menuOpen;
    this.active = !this.active;
  }
  closeAction(){
    this.menuOpen = false;
  }

  selectNav(data:string,index:number)
  {
    this.menuOpen = false;
    this.navActive = index;
    switch(data)
    {
      case "Tag Payment" :{
        this.action.emit(this.index);
      }
    }
  }

  onWindowClick($event)
  {
    console.log($event);
    this.menuOpen = false;
  }

}
