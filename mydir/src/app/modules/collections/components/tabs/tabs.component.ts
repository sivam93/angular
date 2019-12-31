import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() items:string[];
  @Input() active:string;
  @Output() showTab: EventEmitter<any> = new EventEmitter<any>();
  activeItem : string;
  constructor() { }

  ngOnInit() {
    this.activeItem = this.active;
  }
  onSelect(data:string){
    this.activeItem = data;
    this.showTab.emit(data);
  }

}
