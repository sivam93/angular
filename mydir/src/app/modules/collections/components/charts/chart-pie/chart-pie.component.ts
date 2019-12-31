import { Component, OnInit, Input } from '@angular/core';
import { ChartType,ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { TOTALINVOICES } from 'src/app/models/dashboard/totalinvoices';
import { Observable  } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {
  @Input() loaded:boolean;
  @Input() chartDatas$:Observable<TOTALINVOICES[]>;
  @Input() loadData:string;
  @Input() chartLoaded$:Observable<boolean>;
  @Input() chartDatasCount$:Observable<any[]>;
  doughnutChartOptions:any;
  chartOptions:ChartOptions;
  chartLoaded: boolean;
  doughnutChartLegend: boolean;
  doughnutChartLabels: Label[];
  doughnutChartData: SingleDataSet;
  chartData:any;
  donutColors:any;
  doughnutChartType: ChartType = 'doughnut';

  totalInvoices:any;
  colors:any;
  data: any;
  totalcount: number;
  loadHeading: boolean;
  notaligned: boolean;
  flexWidth:number = 1;
  constructor(private route:Router) { }

  ngOnInit():void {
    this.load_chart(this.loadData);
    this.chartOptions = this.loadChartOptions();
  }
  load_chart(data:string){
    switch(data)
    {
      case "Total Invoices" : {
        this.loaded = false;
        this.doughnutChartLegend = true;
        this.loadHeading = true;
        this.notaligned = true;
        this.flexWidth = 1;
        this.doughnutChartLabels = ['Invoice Not Tagged','Salary Processed','Salary to be Released','Finance Exceptions'];
        this.donutColors = [
          {
            backgroundColor: [
              '#1f83ec',
              '#21c67d',
              '#ffb528',
              '#5b3cf1'
            ]
          }
        ]; 
        this.chartDatas$.subscribe(data =>{
          this.totalInvoices = data;
          this.chartData = [
              this.totalInvoices[0].invoicenottagged,
              this.totalInvoices[0].salaryprocessed,
              this.totalInvoices[0].salarytobereleased,
              this.totalInvoices[0].financeexceptions
          ];
            this.colors = ["1","2","3","4"];
            this.doughnutChartData = this.chartData;
            this.data = JSON.parse(this.createData(this.doughnutChartLabels,this.doughnutChartData,this.colors));
            this.totalcount = this.chartData.reduceRight(this.totalCount);
            this.loaded = true;
        });
        this.chartLoaded$.subscribe(loaded => {
          this.chartLoaded = loaded;
        })
        break;
      }
      case "Total Exceptions" : {
        this.loaded = false;
        this.doughnutChartLegend = true;
        this.loadHeading = true;
        this.notaligned = true;
        this.flexWidth = 1;
        this.doughnutChartLabels = [
          'Untagged Invoices', 
          'Finance Exceptions', 
          'Most Probable Match'
        ];
        this.donutColors = [
          {
            backgroundColor: [
              '#7240ff',
              '#ffea4b',
              '#f436a4'
            ]
          }
        ]; 
        
        this.chartDatas$.subscribe(data =>{
          this.totalInvoices = data;
          this.chartData = [
              this.totalInvoices[0].untaggedinvoices,
              this.totalInvoices[0].financeexceptions,
              this.totalInvoices[0].mostprobable
          ];
          this.colors = ["5","6","7"];
          this.doughnutChartData = this.chartData;
          this.data = JSON.parse(this.createData(this.doughnutChartLabels,this.doughnutChartData,this.colors));
          this.totalcount = this.chartData.reduceRight(this.totalCount);
          this.loaded = true;
        });

        this.chartLoaded$.subscribe(loaded => {
          this.chartLoaded = loaded;
        })
        break;
      }

      case "All Clients" : {
        this.loaded = false;
        this.doughnutChartLegend = true;
        this.loadHeading = false;
        this.notaligned = false;
        this.flexWidth = 0;
        this.doughnutChartLabels = [
          'Pending Collection against Inoivces', 
          'Pending Invocies', 
          'Collection Recieved against Inoivces'
        ];
        this.donutColors = [
          {
            backgroundColor: [
              '#76e8ca',
              '#7778f6',
              '#ff8f6c'
            ]
          }
        ]; 
        this.colors = ["8","9","10"];
        this.chartData = [20,34,23];
        this.loaded = true;
        this.doughnutChartData = this.chartData;
        this.data = JSON.parse(this.createData(this.doughnutChartLabels,this.doughnutChartData,this.colors));
        this.totalcount = this.chartData.reduceRight(this.totalCount);

        this.chartLoaded$.subscribe(loaded => {
          this.chartLoaded = loaded;
        })
        break;
      }
      case "Selected Clients" : {
        this.loaded = false;
        this.doughnutChartLegend = true;
        this.loadHeading = false;
        this.notaligned = false;
        this.flexWidth = 0;
        this.doughnutChartLabels = [
          'Pending', 
          'Recieved', 
          'Invoices not generated'
        ];
        this.donutColors = [
          {
            backgroundColor: [
              '#76e8ca',
              '#7778f6',
              '#ff8f6c'
            ]
          }
        ]; 
        this.colors = ["8","9","10"];
        this.chartData = [12,45,77];
        this.loaded = true;
        this.doughnutChartData = this.chartData;
        this.data = JSON.parse(this.createData(this.doughnutChartLabels,this.doughnutChartData,this.colors));
        this.totalcount = this.chartData.reduceRight(this.totalCount);

        this.chartLoaded$.subscribe(loaded => {
          this.chartLoaded = loaded;
        })
        break;
      }
      case "Total Invoices Ops Manager" : {
        this.loaded = false;
        this.doughnutChartLegend = true;
        this.loadHeading = false;
        this.notaligned = true;
        this.flexWidth = 0;
        this.doughnutChartLabels = [
          'Untagged Invoices', 
          'Most Probable', 
          'Finance Exceptions',
          'Salary Processed',
          'Salary to be Released'
        ];
        this.donutColors = [
          {
            backgroundColor: [
              '#875ef9',
              '#ffea4b',
              '#ffb528',
              '#5b3cf1',
              '#f436a4'
            ]
          }
        ]; 
        this.colors = ["4","6",'3','4',"7"];
        this.chartData = [12,45,77,34,54];
        this.loaded = true;
        this.doughnutChartData = this.chartData;
        this.data = JSON.parse(this.createData(this.doughnutChartLabels,this.doughnutChartData,this.colors));
        this.totalcount = this.chartData.reduceRight(this.totalCount);

        this.chartLoaded$.subscribe(loaded => {
          this.chartLoaded = loaded;
        })
        break;
      }
      default:{

      }
    }
    
  }


  createData(x:any,y?:any,color?:any){
    var res = "";
    x.forEach((element:any,i:any) => {
      y[i] = (y[i] != null) ? y[i] : 0;
      res += '{"key":"'+element+'","value":"'+y[i]+'","color":"'+color[i]+'"}';
      if(x.length - 1 != i)
        res+=","
    });
    return "["+res+"]";
  }
  totalCount(total:number,num:number)
  {
    return Number(total) + Number(num);
  }

  chartClicked(data)
  {
    if(data.active.length !== 0)
    {
      let url = data.active[0]._model.label;
      if(url === "Invoice Not Tagged" || url === "Untagged Invoices")
        this.route.navigateByUrl('/home/collections/untagged');
      else if(url == "Finance Exceptions")
        this.route.navigateByUrl('/home/collections/financialexceptions');
      else if(url == "Salary Processed")
        this.route.navigateByUrl('/home/collections/salaryprocess');
      else if(url == "Most Probable Match")
        this.route.navigateByUrl('/home/collections/mostprobablematch');
      else if(url == "Salary to be Released")
        this.route.navigateByUrl('/home/collections/salaryrelease');
    }
  }


  loadChartOptions() {
    this.doughnutChartOptions = {
      elements:{
        arc : {
          borderWidth: 0,
        }
      },
      cutoutPercentage: 70,
      responsive:true,
      maintainAspectRatio:true,
      aspectRatio:1,
      tooltips: {
        enabled: false,
        callbacks:{
          label: function(tooltipItem, data) {     
            let i = tooltipItem.index  
            let label =  data.labels[i]; 
              return label +":"+data.datasets[0].data[i];
          } 
        },
        custom: function(tooltipModel) {
          // Tooltip Element
          var tooltipEl = document.getElementById('chartjs-tooltip');

          // Create element on first render
          if (!tooltipEl) {
              tooltipEl = document.createElement('div');
              tooltipEl.id = 'chartjs-tooltip';
              tooltipEl.innerHTML = '<table></table>';
              document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = '0';
              return;
          }

          // Set caret Position
          tooltipEl.classList.remove('above', 'below', 'no-transform');
          if (tooltipModel.yAlign) {
              tooltipEl.classList.add(tooltipModel.yAlign);
          } else {
              tooltipEl.classList.add('no-transform');
          }

          function getBody(bodyItem) {
              return bodyItem.lines;
          }

          // Set Text
          if (tooltipModel.body) {
              var titleLines = tooltipModel.title || [];
              var bodyLines = tooltipModel.body.map(getBody);

              var innerHtml = '<thead>';

              titleLines.forEach(function(title) {
                  innerHtml += '<tr><th>' + title + '</th></tr>';
              });
              innerHtml += '</thead><tbody>';

              bodyLines.forEach(function(body, i) {
                  var colors = tooltipModel.labelColors[i];
                  var style = 'background:' + colors.backgroundColor;
                  style += '; border-color:' + colors.borderColor;
                  style += '; border-width: 2px';
                  var span = '<span style="' + style + '"></span>';
                  innerHtml += '<tr><td>' + span + body + '</td></tr>';
              });
              innerHtml += '</tbody>';

              var tableRoot = tooltipEl.querySelector('table');
              tableRoot.innerHTML = innerHtml;
          }

          // `this` will be the overall tooltip
          var position = this._chart.canvas.getBoundingClientRect();

          // Display, position, and set styles for font
          tooltipEl.style.opacity = '1';
          tooltipEl.style.position = 'absolute';
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 15 + 'px';
          tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
          tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
          tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
          tooltipEl.style.pointerEvents = 'none';
      }
      } 
    };
    return this.doughnutChartOptions;

}


}
