import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { dateFormat } from 'src/app/api/api';

@Component({
  selector: 'app-srdetails',
  templateUrl: './srdetails.component.html',
  styleUrls: ['./srdetails.component.scss']
})
export class SrdetailsComponent implements OnInit {

  @Input() tableContent: any;
  @Input() tableButton: any;
  @Input() userStatus: number;

  invoiceAmount: any;
  dateFormat:string = dateFormat;
  constructor() { }
  ngOnInit() {
      this.invoiceAmount = Number(this.tableContent.invoice_amount).toFixed(2);
  }

}
