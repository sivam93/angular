import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fe-excinfo',
  templateUrl: './fe-excinfo.component.html',
  styleUrls: ['./fe-excinfo.component.scss']
})
export class FeExcinfoComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
