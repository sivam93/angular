import { Component, OnInit } from '@angular/core';
import { pdccycle } from "src/app/models/pdc"; 
import { Observable } from 'rxjs';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-reconcillation',
  templateUrl: './reconcillation.component.html',
  styleUrls: ['./reconcillation.component.scss']
})
export class ReconcillationComponent implements OnInit {



  heading: string = "Reconciliation";
  chartLoaded: boolean = false;
  pdccycle: pdccycle = {
    month:null,
    year:null
  };
  tableContent$: Observable<any[]>;
  chartOptions:ChartOptions;
  loading:boolean;

  constructor() { }

  ngOnInit() {
  }

}
