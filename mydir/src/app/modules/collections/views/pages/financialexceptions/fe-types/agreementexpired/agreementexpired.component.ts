import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';
import { HttpClient } from '@angular/common/http';
import { FileuploadService } from 'src/app/services/fileupload/fileupload.service';
 '@angular/core/';


export interface agreementexpired {
  exceptioninfo:string,
  inm_id:string,
  exceptionid:number
}
interface uploader {
  percentage : string;
  status: string;
  success: boolean;
  uploadbar:boolean;
}

@Component({
  selector: 'app-agreementexpired',
  templateUrl: './agreementexpired.component.html',
  styleUrls: ['./agreementexpired.component.scss']
})



export class AgreementexpiredComponent implements OnInit {

  @Input() exception : agreementexpired;
  @Input() showException : boolean;
  @Input() single: boolean;
  @Input() roleid:number;
  @Input() data:any;
  @Output() invoiceNo: EventEmitter<any> = new EventEmitter<any>();

  exceptionInfo : any;
  remarks: string;
  remarksList: string[];
  arraySplitter:string = "$&$";
  updateData: agreementexpired;
  tokenInfo : any;
  exceptioninfoDetails:any;
  result:any;
  attachment:File[] = null;
  fileUpload:boolean = false;
  uploadedFiles:any[] = [];
  fileName:any;
  fileExt:any;
  deleteRow:boolean = false;

  commonData:object;
  attachfiles:string[] = [];
  fileuploader : uploader = {
    percentage : '',
    status: '',
    success: false,
    uploadbar:false
  };

  constructor(
    private token: TokenService,
    private fus: FileuploadService
  ) { }
  ngOnInit() {
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
          if(d.attachments !== undefined)
            this.attachfiles = this.removeNull(d.attachments.split(this.arraySplitter));
        }
      })
    }
    else if(this.data.exceptions[0].exceptioninfo != null)
    {
      this.exceptionInfo = this.data.exceptions[0].exceptioninfo;
      this.remarksList = this.exceptionInfo.Remarks.split(this.arraySplitter);
      if(this.data.exceptions[0].attachments != undefined)
      {
        this.attachfiles = this.removeNull(this.data.exceptions[0].attachments.split(this.arraySplitter));
      }  
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
      AgreementType:this.exceptionInfo.AgreementType,
      AgreementExpiredDate:this.exceptionInfo.AgreementExpiredDate,
      Remarks:this.exceptionInfo.Remarks
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


  onFileSelected(data):void{
    this.uploadedFiles = [];
    this.fileuploader.success = true;
    this.attachment = <Array<File>>data.target.files;
    const maxFileSize = 5242880; // 5 MB Max 
    if(data.target.files.length >= 1){
      this.fileUpload = true;
      for(let i = 0 ;i < data.target.files.length;i++)
      {
        if(data.target.files[i].size < maxFileSize)
        {
          this.fileUpload = true;
          this.uploadedFiles.push(data.target.files[i].name);
        }
      }
    }
  }

  
  onUpload(){
    this.fileUpload = false;
    const fd = new FormData();
    let files: Array<File> = this.attachment;
    for(let i =0; i < files.length; i++){
      this.fileName = files[i].name.substring(0,files[i].name.lastIndexOf('.'));
      this.fileExt = files[i].name.substring(files[i].name.lastIndexOf('.'),files[i].name.length);
     
      fd.append("files", files[i], this.fileName+this.fileExt);

    }
    fd.append("inm_id",this.data.inm_id);
    fd.append("exceptionid",String(this.getExceptionId()));
    
    this.fus.upload(fd,'sample').subscribe(
      res => {
        if(res.message !== undefined && res.message !== '')
        {
          this.fileuploader.uploadbar = true;
          this.fileuploader.percentage = res.message+'%';
          this.fileuploader.status = "uploading...";
        }
      },
      fileSuccess => {
        let fs:string[] = [];
        let tmp:string[]=[]
        let res;
        fs = fileSuccess.split(this.arraySplitter);
        for(let i=0;i<fs.length;i++)
        {
          tmp.push(fs[i]);
        }
        this.attachfiles = this.removeNull(this.attachfiles.concat(tmp));
        this.fileuploader.status = "Uploaded Successfully";
        setTimeout(()=>{
          this.uploadedFiles = [];
          this.fileuploader.status = '';
          this.fileuploader.success = false;
          this.fileuploader.uploadbar = false;
        },2000);
      }
    );
  }
  removeNull(data){
    return data.filter(d=> d !== '');
  }

}
