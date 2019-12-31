import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableheader',
  templateUrl: './tableheader.component.html',
  styleUrls: ['./tableheader.component.scss']
})
export class TableheaderComponent implements OnInit {
  @Input() headerContent : any[];
  @Input() module : string;
  @Input() textAlign : string = "left";
  constructor() { }

  ngOnInit() {
  }

}
