import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, Inject } from '@angular/core';
import { FileuploadService } from 'src/app/services/fileupload/fileupload.service';
import { FileDownloadService } from '../../../../../services/file-download/file-download.service';
import { MatSnackBar, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { constants } from 'src/app/modules/reconcilation/views/pages/uploads/constant';



const reportApi = new Map([["Invoice Working Sheet", "invoice"],
["Associate Release Data", "associate"],
["Reimbursement Data", "reimburse"],
["AccPac", "accpac"]]);
interface uploader {
  percentage: string;
  status: string;
  success: boolean;
  uploadbar: boolean;
}
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UploadsComponent implements OnInit {
  @ViewChild('file') file: ElementRef;

  clickable: boolean;
  heading: any = "Reconcillation"
  JSONData: any;
  displayMessage: boolean;
  submitEnable: boolean;
  uploadedFiles: Array<File>;
  reportName: any;
  filename: any;
  displayProgressSpinner = false;
  durationInSeconds = 5;
  JSON: any;
  color = 'primary';
  mode = 'indeterminate';
  value = 0;
  fileuploader: uploader = {
    percentage: '',
    status: '',
    success: false,
    uploadbar: false
  };

  constructor(
    private fus: FileuploadService,
    private fileService: FileDownloadService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService


  ) { }
  ngOnInit() {
    this.submitEnable = false;
    this.clickable = false;
    // this.reportName = "Host";
  }
  addFiles() {
    if (this.clickable) {
      this.file.nativeElement.value = '';
      this.file.nativeElement.click();
    } else {
      const el: HTMLElement = document.getElementById('sample');
      el.focus();
    }
  }
  reports(data: any) {
    this.clickable = true
    this.reportName = data;
  }
  onFilesAdded(e) {

    this.uploadedFiles = e.target.files;
    this.filename = this.uploadedFiles[0].name
    this.submitEnable = true;
    console.log(this.filename.toLowerCase().search(reportApi.get(this.reportName)));


  }
  openSnackBar(data: any, cssclass: any) {
    this._snackBar.open(data, 'X', {
      duration: 4000,
      panelClass: [cssclass]
    });
  }
  showSpinner() {
    this.spinner.show();
  }
  upload() {
    let formData = new FormData();
    this.filename = this.uploadedFiles[0].name;
    formData.append("file", this.uploadedFiles[0]);
    this.fus.upload(formData, this.reportName).subscribe(
      (res) => {
        if (res.message !== undefined && res.message !== '' && res.status == 'progress') {
          this.fileuploader.uploadbar = true;
          this.fileuploader.percentage = res.message + '%';
          this.fileuploader.status = "uploading...";
        } else {
          if (res.isSuccessful) {
            this.fileuploader.status = "Upload Successful";
            this.uploadedFiles = [];
            this.submitEnable = false;
            this.filename = '';
            this.spinner.hide();
            this.openSnackBar('Upload Successful', 'green');
          }
        }
        setTimeout(() => {
          this.uploadedFiles = [];
          this.filename = '';
          this.fileuploader.status = '';
          this.fileuploader.uploadbar = false;
          this.submitEnable = false;
        }, 5000);
      },
      (err) => {
        this.spinner.hide();
        this.filename = '';
        this.uploadedFiles = [];
        this.fileuploader.uploadbar = false;
        this.submitEnable = false;
        if (err.status == 401) {  
          const dialogRef = this.dialog.open(ConfirmationDialog,
            {
              data: { title: 'logout' },
              panelClass: ["logout"]
            });
        } else
          if (!err.message.isSuccessfull && err.message.validationResult == null) {
            this.openSnackBar(err.message.message, 'red');
          } else if (!err.message.isSuccessfull && err.message.validationResult != null) {
            if (JSON.stringify(err.message.validationResult[0].rowNo).length > 27) {
              this.openSnackBar(err.message.message + "\n" + "Downloading the Error File", "red");
              let txt = err.message.message + "\n" + JSON.stringify(err.message.validationResult[0].column) + "\n" + JSON.stringify(err.message.validationResult[0].rowNo);
              this.Downloadable(txt);
            } else {
              this.openSnackBar(err.message.message + "\n" + JSON.stringify(err.message.validationResult[0].column) + ":" + JSON.stringify(err.message.validationResult[0].rowNo), "red");
            }
          }
          else {
            this.openSnackBar(err.message.message + "\n Downloading the Error File", 'red');
          }
      }

    );
   
  }
  Downloadable(err) {
    let blob = new Blob(['\ufeff' + err], { type: 'application/text;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", "ErrorDescription" + ".txt");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
  showProgressSpinner() {
    this.displayProgressSpinner = true;
  }
  downloadErrorFile() {
    // this.fileService.downloadErrorFile();
  }
  info() {
    if (this.clickable) {

      const dialogRef = this.dialog.open(ConfirmationDialog,
        {
          data: { title: this.reportName },
          panelClass: ["dialog"]
        });
    }
    else {
      const el: HTMLElement = document.getElementById('sample');
      el.focus();
    }
  }
  download() {
    if (this.clickable) {
     // console.log(this.fileService.downloadFile(this.reportName));
      this.fileService.downloadTemplateReport(this.reportName).subscribe(
        (res) => {

        },
        (err) => {
          if (err.status = 401) {
            const dialogRef = this.dialog.open(ConfirmationDialog,
              {
                data: { title: 'logout' },
                panelClass: ["logout"]
              });
           
          }
        }

      )
    } else {
      const el: HTMLElement = document.getElementById('sample');
      el.focus();
    }

  }
}


@Component({
  selector: 'confirmation-dialog',
  templateUrl: 'confirmation-dialog.html',
})
export class ConfirmationDialog implements OnInit {
  description: string;
  details: any;
  status: boolean = true;
  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
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

/*
 /* this.files = e.target.files[0];
     this.clickable=true;
     const reader = new FileReader();
     reader.readAsText(this.files);
      reader.onload = () => {
         let csvData = reader.result;
         this.csvJSON(csvData);
         console.log(this.JSONData);
       };
*/



/* this.fileService.getJSON().subscribe(data => {
   this.JSON = JSON.parse(data);
   this.fileService.downloadFile(this.reportName);





.subscribe(
    (result)=>{

    },
    (err)=>{
      console.log("sss")
      if(err.status==401){
        localStorage.removeItem('token');
        const dialogRef = this.dialog.open(ConfirmationDialog,
          {
            data: { title: 'logout' },
            panelClass:["logout"]
          },);
        this.router.navigateByUrl('/login');
      }
    }

);




 });*/


 /*
        this.fus.uploadJson(formData, this.reportName).subscribe((result) => {
          if (result.isSuccessfull) {
            this.openSnackBar(result.message, 'green');
          } else {
            this.openSnackBar(result.message, 'yellow');
          }
        },
          (err) => {
    
            if (!err.message.isSuccessfull) {
              this.openSnackBar(err.message.message, 'yellow');
            } else {
              this.openSnackBar(err.message.message + "\n Downloading the Error File", 'red');
            }
          });*/
