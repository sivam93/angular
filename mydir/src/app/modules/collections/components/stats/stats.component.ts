import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.d-assets__section',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() icons:any[];
  @Input() data:number[];
  @Input() textDetails:any[];
  @Input() module:string;
  statData: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(!!this.data){         
         this.statData = JSON.parse(this.createData(this.icons,this.data,this.textDetails));
    }
  }

  createData(x:any,y?:any,z?:any){
    let res = "";
    x.forEach((element:any,i:any) => {
      res += '{"icon":"'+element+'","value":"'+y[i]+'","text":"'+z[i]+'"}';
      if(x.length - 1 != i)
        res+=","
    });
    return "["+res+"]";
  }

}
