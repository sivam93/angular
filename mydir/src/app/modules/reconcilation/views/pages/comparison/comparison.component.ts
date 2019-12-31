import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FileDownloadService } from '../../../../../services/file-download/file-download.service';

import {   MatDialog } from '@angular/material';
import { ConfirmationDialog } from '../uploads/uploads.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
 

export interface UserData {
  client_id: string;
  client_name: string;
  mandate_type: string;
  corp_name: string;
  corp_id:string;
  client_status:string;
  invoiceno:string;
  asscno:number;
  taxable:number;
}

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss'],
  animations: [
    trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
    state('expanded', style({height: '*'})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
],
})
export class ComparisonComponent implements OnInit {
  displayedColumns = [ "client_id","client_name","mandate_type","corp_name","corp_id","client_status","invoiceno","asscno","taxable"];
  // /@ViewChild(MatPaginator) paginator: MatPaginator;
 // @ViewChild(MatSort) sort: MatSort;
  talbleready:boolean;
  NoRecords:boolean;
  showSpinner:boolean=false;
  arrbirds3:string[];
  arrBirds:string[];
  arrBirds2:string[];
  p: number;
  reportName: any;
  month: number;
  dataSource: MatTableDataSource<string>;
  expandedElement:string[];
  status: boolean;

  
  ngOnInit() {
   
  }
  private paginator: MatPaginator;
  private sort: MatSort;


  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
   // this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
 //   this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource = new MatTableDataSource(this.arrbirds3);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getamount(amount){
    return amount.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
  }
  ngAfterViewInit(){
  
  }
  constructor(private httpService: HttpClient,
    private fileService: FileDownloadService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService) {
      
   }
  reports(data: any) {  
    this.reportName = data;
    if(this.month==null){
      this.talbleready=false;
      const el: HTMLElement = document.getElementById('monthselect');
      el.focus();
    }else{
      this.showSpinner=true;
      this.NoRecords=false;
      this.talbleready=false;
    this.fileService.downloadfconsolidatedJSon(this.reportName,this.month).subscribe(
      (result)=>{
        this.showSpinner=false;
        if(result==null){
          this.talbleready=false;
          this.NoRecords=true;
        }else{
        this.talbleready=true;
        this.NoRecords=false;
        this.arrbirds3=JSON.parse(result);
        this.setDataSourceAttributes()
        this.expandedElement=JSON.parse(result);
      }
      },(err)=>{
        this.showSpinner=false;
        if(err.status==401){
          const dialogRef = this.dialog.open(ConfirmationDialog,
            {
              data: { title: 'logout' },
              panelClass:["logout"]
            },);
      }
      }
     );
    }
  }
  onClickDownload($event){
   
    if(this.reportName==null||this.month==null){
      const el: HTMLElement = document.getElementById('monthselect');
      el.focus();
    }else if(this.talbleready){
      this.showSpinner=true;
    this.fileService.downloadconsolidatedcsv(this.reportName,this.month).subscribe(
      (res)=>{
        this.showSpinner=false;
      },
      (err)=>{
        this.spinner.hide();
        const dialogRef = this.dialog.open(ConfirmationDialog,
          {
            data: { title: 'logout' },
            panelClass:["logout"]
          },);
      }
    );
  }
  }

  getRowColor(row){
    if(row.toLowerCase()=="active"){
      return "#14c83b";

    }else /*if(row.toLowerCase()=="inactive")*/{
      return "#f45c20";
    }
  }
  clickEvent($event){
   
    if($event.length>33){
     this.status = !this.status
    }
    return $event;
     
   }
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selectedMonth(event:number){
    this.month=+event ; 
    if(this.reportName==null){
      this.talbleready=false;

      const el: HTMLElement = document.getElementById('sample');
      el.focus();
    }else{
      this.showSpinner=true;
      this.NoRecords=false;
      this.talbleready=false;
    this.fileService.downloadfconsolidatedJSon(this.reportName,this.month).subscribe(
      (result)=>{
        this.showSpinner=false;
        if(result==null){
          this.talbleready=false;
          this.NoRecords=true;
        }else{
        this.talbleready=true;
        this.NoRecords=false;
        this.arrbirds3=JSON.parse(result);
        this.dataSource = new MatTableDataSource(this.arrbirds3);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.expandedElement=JSON.parse(result);
      }
      },
      (err)=>{
        this.showSpinner=false;
        const dialogRef = this.dialog.open(ConfirmationDialog,
          {
            data: { title: 'logout' },
            panelClass:["logout"]
          },);
      }
     );
    }
  }
     
  
}
