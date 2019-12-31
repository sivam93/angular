import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FileDownloadService } from '../../../../../services/file-download/file-download.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {   MatDialog } from '@angular/material';
import { ConfirmationDialog } from '../uploads/uploads.component';


@Component({
  selector: 'app-finalout',
  templateUrl: './finalout.component.html',
  styleUrls: ['./finalout.component.scss']
})
export class FinalOutComponent implements OnInit {

  arrbirds3:string[];
  p: number;
  reportName: any;
  month: number;
  constructor(private httpService: HttpClient,
    private fileService: FileDownloadService,
    private spinner: NgxSpinnerService,
    private dialog:MatDialog) {
   
   }
  arrBirds: string;  
  sample:string;
  arrBirds2:string[];
  talbleready:boolean;
  NoRecords:boolean;
  
  value:any;
  ngOnInit() {
    this.value=10;
    this.arrbirds3=[];
    this.NoRecords=false;
  }
  getRowColor(row){
    if(row.toLowerCase()=="active"){
      return "#14c83b";

    }else /*if(row.toLowerCase()=="inactive")*/{
      return "#f45c20";
    }
  }
  reports(data: any) {
    //this.spinner.show();
    this.reportName = data;
    if(this.month==null){
      this.talbleready=false;
      const el: HTMLElement = document.getElementById('monthselect');
      el.focus();
    }else{
    
    this.fileService.downloadfconsolidatedJSon(this.reportName,this.month).subscribe(
      (result)=>{
        if(result==null){
          this.talbleready=false;
          this.NoRecords=true;
        }else{
        this.talbleready=true;
        this.NoRecords=false;
        this.arrbirds3=JSON.parse(result);
      }
      },(err)=>{

      }
     );
    }
  }
  onClickDownload($event){
    if(this.reportName==null||this.month==null){
      const el: HTMLElement = document.getElementById('monthselect');
      el.focus();
    }else if(this.talbleready){
      this.fileService.downloadconsolidatedcsv(this.reportName,this.month).subscribe(
        (res)=>{
  
        },
        (err)=>{
          const dialogRef = this.dialog.open(ConfirmationDialog,
            {
              data: { title: 'logout' },
              panelClass:["logout"]
            },);
        }
      );
  }
  }

  selectedMonth(event:number){
    this.month=+event ; 
    if(this.reportName==null){
      this.talbleready=false;

      const el: HTMLElement = document.getElementById('sample');
      el.focus();
    }else{
      
    this.fileService.downloadfconsolidatedJSon(this.reportName,this.month).subscribe(
      (result)=>{
        if(result==null){
          this.talbleready=false;
          this.NoRecords=true;
        }else{
        this.talbleready=true;
        this.NoRecords=false;
        this.arrbirds3=JSON.parse(result);
      }
      }
     );
    }
  }
     
    /*this.httpService.get('./assets/sample.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        this.arrBirds2=  JSON.parse(JSON.stringify(this.arrBirds).replace("/", ""));
        this.arrBirds2 = JSON.parse(JSON.stringify(this.arrBirds2).replace(/\s(?=\w+":)/g, ""));
        this.arrbirds3=this.arrBirds2;
        


      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );*/
 
  getdata($event){
   this.arrbirds3= this.arrbirds3.concat(this.arrBirds2)
   
    return $event;
  }
  
  onChange(event){
    this.value=event.target.value;
    console.log(this.value)
  }

}
