import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit {
  colors:string[] = 
    [
      '#875ef9',
      '#ffea4b',
      '#ffb528',
      '#5b3cf1',
      '#f436a4',
      '#ff8f6c'
    ]
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
          xAxes: [{
              gridLines: {
                  display:false
              },
              ticks: {
                  beginAtZero:true
              },
              scaleLabel: {
                display: true,
                fontSize: 11,
                labelString: "Amount",
                fontColor:'#3d447a'
            }  
          }],
          yAxes: [{
              gridLines: {
                  display:false
              },
              ticks: {
                  beginAtZero:true
              },
              scaleLabel: {
                  display: true,
                  fontSize: 11,
                  labelString: "Days",
                  fontColor:'#3d447a'
              }   
          }]
    },
  };
  public barChartLabels: Label[] = ['0', '5-10', '10-15', '15-20', '25-30', '30+'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartData: ChartDataSets[] = [
    { 
      data: [20000, 1000, 34567, 83877, 26263, 93893],
      backgroundColor: this.colors, 
      hoverBackgroundColor:this.colors,
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
