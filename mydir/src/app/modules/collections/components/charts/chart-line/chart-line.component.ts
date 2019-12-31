import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit {
  @Input() data:number[]; 
  @Input() labels:Label[];
  @Input() lineColors:Color[];
  @Input() lineLegends:any[];
  lineChartData: ChartDataSets[];
  lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
        xAxes: [{
            gridLines: {
                display:false,
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            }   
        }]
  }
  };
  lineChartLegend:boolean = false;
  lineChartType:string = 'line';

  constructor() { }

  ngOnInit() {
    this.lineChartData = this.mapChartData(this.data);
  }


  mapChartData(data:number[])
  {
    let i:number;
    let len:number = data.length
    let res:any[] = [];
    for(i=0;i<len;i++)
    {
      res.push({
        data:data[i]
      })
    }
    return res;
  }

}
