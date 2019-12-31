import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeNull'
})
export class RemoveNullPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if(!value) return [];
    return value.filter(data=>{
      return data !== ""
  })
  }

}
