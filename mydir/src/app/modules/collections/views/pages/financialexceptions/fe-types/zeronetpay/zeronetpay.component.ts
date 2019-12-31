import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';

export interface zeronetpay {
  exceptioninfo:string,
  inm_id:string,
  exceptionid:number
}

@Component({
  selector: 'app-zeronetpay',
  templateUrl: './zeronetpay.component.html',
  styleUrls: ['./zeronetpay.component.scss']
})
export class ZeronetpayComponent implements OnInit {

  @Input() exception : string;
  @Input() showException : boolean;
  @Input() single: boolean;
  @Input() roleid:number;
  @Input() data:any;

  exceptionInfo : any;
  remarks: string;
  remarksList: string[];
  arraySplitter:string = "$&$";
  updateData: zeronetpay;
  tokenInfo : any;
  exceptioninfoDetails:any;
  result:any;
  deleteRow:boolean = false;
  commonData:object;
  @Output() invoiceNo: EventEmitter<any> = new EventEmitter<any>();
  constructor(private token:TokenService) { }

  ngOnInit() {
    console.log(this.data);
    this.commonData = {
      bank_name:this.data.bank_name,
      ifsc_code:this.data.ifsc_code,
      amount_received:this.data.amount_received,
      utr_number:this.data.utr_number,
      payment_date:this.data.payment_date,
    }
    this.tokenInfo = this.token.getDecodedAccessToken();
    if(this.data.exceptions.length > 1)
    {
      this.data.exceptions.map(d =>{
        if(d.name === this.exception)
        {
          this.exceptionInfo = d.exceptioninfo;
          this.remarksList = d.exceptioninfo.Remarks.split(this.arraySplitter);
        }
      })
    }
    else if(this.data.exceptions[0].exceptioninfo != null)
    {
      this.exceptionInfo = this.data.exceptions[0].exceptioninfo;
      this.remarksList = this.exceptionInfo.Remarks.split(this.arraySplitter);
    }
  }
  
  // Finance anchor / Finance Mangager / Ops Anchor
  update():void {
    this.updateRemarks();
    this.invoiceNo.emit(this.exinfodetails());
  }

  // Finance anchor / Finance Mangager
  sendBackToAnchor():void {
    this.showException = (this.data.exceptions.length > 1) ? false : true;
    this.deleteRow = (this.data.exceptions.length > 1) ? true : false;
    this.updateRemarks();
    this.result = {
      ...this.exinfodetails(),
      roleid:this.tokenInfo.Role_id,
      status:3
    }
    this.invoiceNo.emit(this.result);
  }
  // Finance anchor / Finance Mangager / Ops Anchor
  process():void {
    this.showException = (this.data.exceptions.length > 1) ? false : true;
    this.deleteRow = (this.data.exceptions.length > 1) ? true : false;
    this.updateRemarks();
    this.result = {
      ...this.exinfodetails(),
      roleid:this.tokenInfo.Role_id,
      status:(this.tokenInfo.Role_id == 1) ? 1 : 1
    }
    this.invoiceNo.emit(this.result);
  }

  exinfodetails(){
    this.exceptioninfoDetails = {
      Remarks:this.exceptionInfo.Remarks,
      tabdata:this.exceptionInfo.tabdata
    }

    this.updateData = {
      exceptioninfo:JSON.stringify(this.exceptioninfoDetails),
      inm_id: this.data.inm_id,
      exceptionid: this.getExceptionId()
    }
    return this.updateData;
  }


  getExceptionId():number{
    let ex:any;
    if(this.data.exceptions.length > 1)
    {
      this.data.exceptions.map(d =>{
        if(d.name === this.exception)
        {
          ex = d.exception_id;
        }
      });
    }
    else 
    {
      ex = this.data.exceptions[0].exception_id;
    }
    return ex;
  }

  updateRemarks():void 
  {
    this.remarks = (this.remarks == "" || this.remarks == undefined) ? '' : this.tokenInfo.user_id +"-"+this.remarks;
    this.exceptionInfo.Remarks += this.arraySplitter+this.remarks;
    this.remarksList.push(this.remarks);
    this.remarks = "";
  }

  onUpload():void 
  {
    
  }

}
