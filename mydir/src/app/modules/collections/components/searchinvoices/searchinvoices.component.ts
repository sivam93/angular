import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchinvoices',
  templateUrl: './searchinvoices.component.html',
  styleUrls: ['./searchinvoices.component.scss']
})
export class SearchinvoicesComponent implements OnInit {
  @Input() place:string;
  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  searchText:string;
  constructor() { }

  ngOnInit() {
  }
  onsearchEnter():void {
    this.search.emit(this.searchText);
  }
}
