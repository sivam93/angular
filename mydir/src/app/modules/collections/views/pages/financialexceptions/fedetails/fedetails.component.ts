import { Component, OnInit,Input, Output,EventEmitter  } from '@angular/core';
import { slideDownUp } from 'src/app/animations/slideDownUp';
import { fadeInOut } from 'src/app/animations/fadeInOut';
import { TokenService } from 'src/app/services/token/token.service';
import { dateFormat } from 'src/app/api/api';

@Component({
  selector: 'app-fedetails',
  templateUrl: './fedetails.component.html',
  styleUrls: ['./fedetails.component.scss'],
  animations:[
    slideDownUp,
    fadeInOut
  ]
})
export class FedetailsComponent implements OnInit {
  @Input() tableContent: any;
  @Input() tableButton: any;
  @Input() index: number;
  @Input() active: number;
  @Input() datalength: number;
  @Output() collapse: EventEmitter<any> = new EventEmitter<any>();

  showTable: boolean;
  showException: boolean = true;
  show:boolean = false;
  deleteRow:boolean;
  paymentDate: string;
  fullDate: string;
  fullTime: string;
  processData: any;
  btnText: string = "Process";
  loader: boolean = false;
  modalStatus:string;

  exception:any;
  multiple:boolean;
  invoiceAmount:any;
  

  feresults: any;
  slideStatus:string = 'slideUp';
  fadeStatus:string = 'fadeOut';
  deleteMRow:boolean;

  exceptionData:any;
  exceptionType:string;
  tokenInfo:any;
  roleid:number;
  modal:any;
  dateFormat:string = dateFormat;
  constructor(private token:TokenService) { }

  ngOnInit() {
    this.showTable = false;
    this.feresults =  this.tableContent;
    this.exceptionData = this.feresults;
    this.paymentDate = this.feresults.invoice_date;
    this.fullDate = this.formatDate(this.paymentDate);
    this.fullTime = this.paymentDate.substr(this.paymentDate.indexOf(" "));
    this.invoiceAmount = Number(this.tableContent.invoice_amount).toFixed(2);
    this.tokenInfo = this.token.getDecodedAccessToken();
    this.roleid = this.tokenInfo.Role_id;
  }


  formatDate(val: string) {
      let newDate = new Date(val);
      let sliceDay = this.addZero(newDate.getDate());
      let sliceMonth = this.addZero(newDate.getMonth() + 1);
      let sliceYear = newDate.getFullYear();

      return sliceDay+"/"+sliceMonth+"/"+sliceYear;
  } 


  addZero(val: number)
  {
    if(val < 10)
      return "0"+val;
    else 
      return val;
  }
  

  openSlide(i:any):void{
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

  ngOnChanges():void{
    if(this.feresults)
    {
        this.exceptionData = this.feresults;
        if(this.feresults.exceptions.length <= 1)
        {
          this.exceptionType = this.feresults.exceptions[0].name;
        }
    }
    
    if(this.index !== this.active)
    {
      this.slideStatus = 'slideUp';
      this.fadeStatus = 'fadeOut';
      setTimeout( () => {this.showTable = false},350)
    }
  }
 
  getInvoiceno(data:any):void
  {
    this.show = true;
    this.modalStatus = (data.status == 3) ? 'sent to anchor for processing' : (data.status == 1) ? 'processed successfully':'Updated Successfully'
    
    //this.deleteRow = (this.feresults.exceptions.length <= 1) ? true : false;
    this.showTable = !this.deleteRow;
    //this.deleteMRow = (this.feresults.exceptions.length >= 1)? true:false; 
    this.modal = {
      modalInvoiceNo : data.inm_id,
      modalShow : true,
      text:this.modalStatus
    };
  }

  resModal(data: boolean):void
  {
    this.show = data;
  }

  ngOnDestroy(){

    this.showTable = true;
  }

}
