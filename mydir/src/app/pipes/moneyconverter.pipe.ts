import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyconverter'
})
export class MoneyconverterPipe implements PipeTransform {

  transform(value: string): any {
    if(Number(value) == 0 || value == 'null' || value == undefined || value == '') 
      return 0+" Rs";
    let val : string,str : Number 
    let res : any;
    let len: any;
     val = String(value);
    str =  val.indexOf(".");
    res = String(value).substring(0,Number(str)) ||  String(value).substring(0,value.length)
    len = res.length;
    if(len > 7)
      return (res/10000000).toFixed(2) +" Cr";
    else if(len > 5)
     return (res/100000).toFixed(2) +" Lac"
    else
      return res +" Rs"  
  }

}
