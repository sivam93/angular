import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';

export interface lockstatus {
  exceptioninfo:string,
  inm_id:string,
  exceptionid:number
}

@Component({
  selector: 'app-lockstatus',
  templateUrl: './lockstatus.component.html',
  styleUrls: ['./lockstatus.component.scss']
})
export class LockstatusComponent implements OnInit {
  @Input() exception : string;
  @Input() showException : boolean;
  @Input() single: boolean;
  @Input() roleid:number;
  @Input() data:any;
  
  exceptionInfo : any;
  remarks: string;
  remarksList: string[];
  arraySplitter:string = "$&$";
  updateData: lockstatus;
  tokenInfo : any;
  exceptioninfoDetails:any;
  result:any;
  exid:any;
  commonData:object;
  @Output() invoiceNo: EventEmitter<any> = new EventEmitter<any>();
  constructor(private token:TokenService) { }

  ngOnInit() {

    this.exid = this.getException();
    this.commonData = {
      invoice_no:this.data.invoice_no,
      invoice_amount:this.data.invoice_amount,
      DateofGeneration:this.exid.exceptioninfo.DateofGeneration,
      bank_name:this.data.bank_name,
      ifsc_code:this.data.ifsc_code,
      utr_number:this.data.utr_number,
      mode_of_payment:this.data.modeof_payment,
      payment_date:this.data.payment_date 
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

  // Finance anchor / Finance Mangager / Ops Anchor
  process():void {
  }

  sendBackToAnchor():void{
    
  }

  exinfodetails(){
    this.exceptioninfoDetails = {
      Remarks:this.exceptionInfo.Remarks,
      DateofGeneration:this.exceptionInfo.DateofGeneration
    }
    this.updateData = {
      exceptioninfo:JSON.stringify(this.exceptioninfoDetails),
      inm_id: this.data.inm_id,
      exceptionid: this.exid.exception_id
    }
    return this.updateData;
  }


  getException():any{
    let ex:any;
    if(this.data.exceptions.length > 1)
    {
      this.data.exceptions.map(d =>{
        if(d.name === this.exception)
        {
          ex = d;
        }
      });
    }
    else 
    {
      ex = this.data.exceptions[0];
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
