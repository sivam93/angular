import { Component, OnInit,Input, Output,EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDatePickerConfig, DatePickerComponent } from 'ng2-date-picker';
import { slideDownUp } from 'src/app/animations/slideDownUp';
import { fadeInOut } from 'src/app/animations/fadeInOut';
import { TokenService } from 'src/app/services/token/token.service';
import { RolesService } from 'src/app/services/roles/roles.service';
import { UNTAGGED } from 'src/app/models/untagged';

import { dateFormat } from "src/app/api/api";

interface untagValues  {
  payment_amount: number,
  adjusted_amount: number,
  tds: number,
  tdsAmount: number,
  utrNumber: string,
  modeOfPayment: string,
  totalAmount: number,
  balance:number,
  remarks:string
}


@Component({
  selector: 'app-untagged-details',
  templateUrl: './untagged-details.component.html',
  styleUrls: ['./untagged-details.component.scss'],
  animations:[
    slideDownUp,
    fadeInOut
  ]
})
export class UntaggedDetailsComponent implements OnInit {
  @Input() tableContent: UNTAGGED;
  @Input() tableButton: any;
  @Input() index: number;
  @Input() active: number;
  @Output() invoiceNo: EventEmitter<any> = new EventEmitter<any>();
  @Output() collapse: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('datePicker') datePicker: DatePickerComponent;

  showTable: boolean = false;
  status: boolean = true;
  modeOfPayment: string[];
  modeOfPaymentSelected: any;
  invoiceAmount: any;
  processData: any;
  btnText: string = "Process";
  loader: boolean;
  tdslist: Number[] = [0.5,2,10];
  selectedDate: string;
  datePicked:any;
  datePickerConfig:IDatePickerConfig;
  deleteRow : boolean = false;
  calClose:boolean = false;
  tokenInfo : any;


  slideStatus:string = 'slideUp';
  fadeStatus:string = 'fadeOut';

  formValues: untagValues  = {
    payment_amount : null,
    adjusted_amount: null,
    tds : null,
    tdsAmount: null,
    utrNumber: null,
    modeOfPayment: null,
    balance:0,
    totalAmount: null,
    remarks:null
  };
   
  dateFormat:string = dateFormat;
  anchor:boolean;
  manager:boolean;
  constructor(
    private token: TokenService,
    private roleservice:RolesService
  ) 
  {

  }

  ngOnInit() {
      this.anchor = this.roleservice.getAnchorRoles()
      this.manager = this.roleservice.getManagerRoles();
      this.invoiceAmount = Number(this.tableContent.invoice_amount).toFixed(2);
      this.modeOfPayment = [
        "IMPS",
        "NEFT",
      ]; 
      
      this.formValues.balance = this.tableContent.balance;

      this.datePickerConfig = {
        disableKeypress: false
      }
      this.tokenInfo = this.token.getDecodedAccessToken();
  }

  ngOnChanges(){
    if(this.index !== this.active)
    {
      this.slideStatus = 'slideUp';
      this.fadeStatus = 'fadeOut';
      setTimeout( () => {this.showTable = false},350)
    }
  }

  onChangePayAmount(data:number)
  {
    this.formValues.balance =  Number((Number(data) - Number(this.tableContent.invoice_amount)).toFixed(2));
    this.formValues.totalAmount = Number((Number(this.tableContent.invoice_amount) + Number(this.formValues.balance)).toFixed(2));
  }

  selectMode(data:string)
  {
    if(data === undefined || data === '')
    {
      this.modeOfPaymentSelected = "--select--"; 
    }
  }
  calculateTds(val:number)
  {
    this.formValues.tdsAmount = Number(((this.invoiceAmount) * (val/100)).toFixed(2));
    this.formValues.adjusted_amount = Number(((this.invoiceAmount) - this.formValues.tdsAmount).toFixed(2));
 
  }


  onUntagSubmit(form: NgForm)
  {
    this.loader = false;
    this.deleteRow = true;
    this.datePicked = this.formatDate(this.selectedDate.toString());
    this.processData = {
        client_id: Number(this.tableContent.client_id),
        invoice_no: this.tableContent.invoice_no,
        payment_amount : this.formValues.payment_amount,
        adjusted_amount : this.formValues.adjusted_amount,
        tds: this.formValues.tds,
        tds_amount: this.formValues.tdsAmount,
        utr_number: this.formValues.utrNumber,
        payment_date: this.datePicked,
        modeof_payment:this.formValues.modeOfPayment,
        balance: this.formValues.balance,
        total_amount:this.formValues.totalAmount,
        anchor_id: this.tokenInfo.user_id,
        remarks:this.formValues.remarks
    }
    this.showTable = false;
    this.invoiceNo.emit(this.processData);
  }


  onOpen(){
    if(this.selectedDate != undefined)
      this.calClose = true;
  }
  
  close() { 
    this.datePicker.api.close(); 
    this.calClose = false;
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
  

  formatDate(val: string) {
    let newDate = new Date(val);
    let sliceDay = this.addZero(newDate.getDate());
    let sliceMonth = this.addZero(newDate.getMonth() + 1);
    let sliceYear = newDate.getFullYear();
    let sliceHours = newDate.getHours();
    let sliceMinutes = newDate.getMinutes();
    let sliceSecond = newDate.getSeconds();

      return sliceMonth+"/"+sliceDay+"/"+sliceYear+" "+sliceHours+":"+sliceMinutes+":"+sliceSecond;
  } 


  addZero(val: number)
  {
    if(val < 10)
      return "0"+val;
    else 
    return val;
  }


}
