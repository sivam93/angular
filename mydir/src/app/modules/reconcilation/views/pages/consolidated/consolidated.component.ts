import { Component, OnInit ,ViewChild,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FileDownloadService } from '../../../../../services/file-download/file-download.service';
import { constants } from 'src/app/modules/reconcilation/views/pages/uploads/constant';
import {   MatDialog,MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-consolidated',
  templateUrl: './consolidated.component.html',
  styleUrls: ['./consolidated.component.scss']
})
export class ConsolidatedComponent implements OnInit {

  displayedColumns = [];
  talbleready:boolean;
  NoRecords:boolean;
  showSpinner:boolean=false;
  arrbirds3:string[];
  arrBirds:string[];
  arrBirds2:string[];
   sampless=[];
  sample:any;
  p: number;
  reportName: any;
  month: number;
  dataSource: MatTableDataSource<string>;
  expandedElement:string[];
  status: boolean;

  
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.arrbirds3);
    this.fileService.getYearandMonth();
  }
  private paginator: MatPaginator;
  private sort: MatSort;


  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
   //this.dataSource = new MatTableDataSource(this.arrbirds3);
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
     console.log(this.reportName)
    if(this.reportName=="Consolidated Invoice Registers"){
     
    this.displayedColumns = [ "client_id","client_name","mandate_type","corp_name","corp_id","client_status","invoiceno","asscno","taxable"];
  }else if(this.reportName=="Associate Invoice Registers"){
    this.displayedColumns = [ "client_id","client_name","employee_no","invoice_type","invoice_no","associate_name","total_ctc"];
  }else if(this.reportName=="Associate Release Registers"){
      this.displayedColumns = [ "client_id","client_name","employee_no","invoice_no","associate_name"];
  }else if(this.reportName=="Final Pay Register"){
      this.displayedColumns = [ "client_id","client_name","employee_no","invoice_type","associate_name","total_ctc"];
  }
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
        this.sample=result;  
        this.fileService.csvJSON(result);
        this.arrbirds3=this.fileService.csvJSON(result);
       // this.setDataSourceAttributes();
        this.dataSource = new MatTableDataSource(this.arrbirds3);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

       // this.expandedElement=JSON.parse(result);
      }
      },(err)=>{
        this.showSpinner=false;
        console.log(err.status);
        if(err.status==401){
          const dialogRef = this.dialog.open(ConfirmationDialogConsol,
            {
              data: { title: 'logout' },
              panelClass:["logout"]
            },);
      }else{
        this.NoRecords=true;
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
        const dialogRef = this.dialog.open(ConfirmationDialogConsol,
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
    this.dataSource.filter = filterValue;
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
      //this.setDataSourceAttributes();
        this.dataSource = new MatTableDataSource(this.arrbirds3);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.expandedElement=JSON.parse(result);
      }
      },
      (err)=>{
        this.showSpinner=false;
        if(err.status==401){
          const dialogRef = this.dialog.open(ConfirmationDialogConsol,
            {
              data: { title: 'logout' },
              panelClass:["logout"]
            },);
      }else{
        this.NoRecords=true;
      }
      }
     );
    }
  }
     
  
  getNext(event: PageEvent) {
    this.arrbirds3=this.arrbirds3;
    // call your api function here with the offset
  }
}



@Component({
  selector: 'confirmationConsol-dialog',
  templateUrl: 'confirmationConsol-dialog.html',
})
export class ConfirmationDialogConsol implements OnInit {
  description: string;
  details: any;
  status: boolean = true;
  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogConsol>,
    @Inject(MAT_DIALOG_DATA) data,
    private router: Router,) {
    this.description = data.title;
    console.log(this.description.toString())
    switch (this.description.toString()) {
      case "Invoice Offline": {
        this.details = constants.invoicedata
        break;
      }
      case "Associate Release Offline": {
        this.details = constants.associatewise

        break;
      }
      case "Salary Offline": {
        this.details = constants.salaryreport
        break;
      }
      case "Reimbursement Offline": {
        this.details = constants.reimbursement
        break;
      }
      case "AccPac Offline": {
        this.details = constants.accpac
        break;
      }
      case "logout": {
        this.status = false;
        break
      }
      default: {
      }
    }
  }

  onYesClick(): void {
    this.dialogRef.close(true);
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
