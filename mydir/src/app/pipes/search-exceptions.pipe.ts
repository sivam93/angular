import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchExceptions'
})
export class SearchExceptionsPipe implements PipeTransform {

  transform(invoices:any[], exception:string): any {
    if(!invoices) return [];
    if(!exception || exception == "All") return invoices;
    let ex:string;
    return invoices.filter(data=>{
        ex  = JSON.stringify(data.exceptions);
        return ex.indexOf(exception) > -1 || (data.exceptions.length > 1 && exception == "Multiple");
    })
  }

}
