import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchInvoices'
})
export class SearchInvoicesPipe implements PipeTransform {

  transform(invoices: any[], searchText: string): any[] {
    if(!invoices) return [];
    if(!searchText) return invoices;

    return invoices.filter( it  => {
          return (String(it.client_id).toLowerCase().includes(searchText.toLowerCase()) || String(it.invoice_no).toLowerCase().includes(searchText.toLowerCase()));
    });
  }
}
