import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { SalaryprocessService } from 'src/app/modules/collections/services/salaryprocess/salaryprocess.service';
import { slideDownUp } from 'src/app/animations/slideDownUp';
import { fadeInOut } from 'src/app/animations/fadeInOut';
import { dateFormat } from 'src/app/api/api';

@Component({
  selector: 'app-spdetails',
  templateUrl: './spdetails.component.html',
  styleUrls: ['./spdetails.component.scss'],
  animations:[
    slideDownUp,
    fadeInOut
  ]
})
export class SpdetailsComponent implements OnInit {
  @Input() tableContent: any;
  @Input() tableButton: any;
  @Input() userStatus: number;
  @Input() index: number;
  @Input() active: number;
  @Input() datalength: number;
  @Output() invoiceNo: EventEmitter<any> = new EventEmitter<any>();
  @Output() collapse: EventEmitter<any> = new EventEmitter<any>();

  constructor(private sp: SalaryprocessService) { }

  showTable: boolean;
  status: boolean;
  payAmount: any[];
  adj_amount: number;
  modeOfPayment: string[];
  payAmountSelected: any;
  modeOfPaymentSelected: any;
  tds:number;
  processData: any;
  loader: boolean = false;
  tdsAmount:number;
  invoiceAmount:any;
  slideStatus:string = 'slideUp';
  fadeStatus:string = 'fadeOut';
  dateFormat:string = dateFormat;

  ngOnInit() {
      this.invoiceAmount = Number(this.tableContent.invoice_amount).toFixed(2);
    this.showTable = false;
    this.userStatus = 1;
     if(this.userStatus == 1)
        this.status = true;
     else
        this.status = false;

      this.payAmount = [
        10000,
        20000,
        30000,
        40000,
        50000
      ];
      this.tds = this.tableContent.tds;
      this.tableContent.tdsAmount = (this.tableContent.invoice_amount/100)*this.tds;
      this.payAmountSelected = this.tableContent.payment_amount;
      this.modeOfPayment = [
        "Bank Transfer",
        "Cash",
        "PAYTM"
      ];
      this.modeOfPaymentSelected = this.tableContent.modeof_payment; 
  }
  ngOnChanges(){
    if(this.index !== this.active)
    {
      this.slideStatus = 'slideUp';
      this.fadeStatus = 'fadeOut';
      setTimeout( () => {this.showTable = false},350)
    }
  }

  openSlide(i:any){
    this.slideStatus = (this.slideStatus === 'slideDown') ? 'slideUp' : 'slideDown';
    this.fadeStatus = (this.fadeStatus === 'fadeOut') ? 'fadeIn' : 'fadeOut';
    if(this.fadeStatus !== 'fadeIn')
    {
      setTimeout( () => {this.showTable = !this.showTable},350)
    }
    else
    {   
      this.showTable = !this.showTable;
    }
    this.collapse.emit(this.index);
  }
  

}
