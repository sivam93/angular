import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient,HttpEventType,HttpEvent,HttpHeaders, HttpRequest ,HttpErrorResponse} from '@angular/common/http'; 
import { apiUrl } from 'src/app/api/api';
import { Observable,of, throwError } from 'rxjs';
import { TokenService } from 'src/app/services/token/token.service';
import { catchError,map  } from "rxjs/operators";

const reportApi= new Map([
["Invoice Offline","invoice"],
["Associate Release Offline","associate"],
["Reimbursement Offline","reimburse"],
["AccPac Offline","accpac"],
["Salary Offline","salary"],
["Associate Wise Release Data","release"],
["Consolidated Invoice Registers","invoice"],
["Associate Invoice Registers","associateinvoice"],
["Associate Release Registers","associaterelease"],
["Final Pay Register","finalpay"]

]);


@Injectable({
    providedIn: 'root'
  })
export class FileDownloadService {
   output:string;
   month:any;
   year:any;
    constructor(private http: HttpClient,
      private token:TokenService) {}
   /* downloadErrorFile(){
      let url ='https://localhost:4439'
      let urls="https://r2rdev.teamlease.com/r2rbackend/api/upload/AccpacTemplate";
       this.http.get<any>(url+reportApi.get(file)).subscribe(result=>{
        let blob = new Blob(['\ufeff' + result], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", 'sample' + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
       })
    }*/
  

    downloadTemplateReport(filename): Observable<any> {
      let  headers= new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/csv",
        "Content-Type": "text/csv"
      })
        console.log(reportApi.get(filename))
        const options = {headers,  responseType: 'text' as 'text'};

      return  this.http.get(apiUrl.apiUrl+ reportApi.get(filename)+'/template',options).pipe(
        map(res =>{
          let blob = new Blob(['\ufeff' + res], { type: 'application/csv;charset=utf-8;' });
          let dwldLink = document.createElement("a");
          let url = URL.createObjectURL(blob);
          let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
          if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
              dwldLink.setAttribute("target", "_blank");
          }
          dwldLink.setAttribute("href", url);
          dwldLink.setAttribute("download", filename +"Template"+ ".csv");
          dwldLink.style.visibility = "hidden";
          document.body.appendChild(dwldLink);
          dwldLink.click();
          document.body.removeChild(dwldLink);
         this.output='success';

        } ) ,
        catchError(this.handleError)
        // or any other operator
      );
    }
    downloadFile(filename) : string {
      
     let  headers= new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/csv",
        "Content-Type": "text/csv"
       // "Authorization":"bearer" + 'ss'//this.token.getDecodedAccessToken()
      })
        console.log(reportApi.get(filename))
        const options = {headers,  responseType: 'text' as 'text'};
        this.http.get(apiUrl.apiUrl+ reportApi.get(filename)+'/template',options).subscribe(
          result=>{ 
        let blob = new Blob(['\ufeff' + result], { type: 'application/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename +"Template"+ ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
       this.output='success';
       },
       (err)=>{
        console.log(err.status);
         if (err.status==401){
          this.output='logout';
         }
       });
       console.log(this.output)
       return this.output;
    }

    
    public csvJSON(csv) {
      var lines = csv.toString().split("\n");
  
      var result = [];
  
      var headers = ["month","invoice_nos","invoice_date","invoice_module","invoice_description","invoice_type","split_type","split_value","processing_month","processing_year","client_name","client_id","corp_name","corp_id","mandate_type","client_status","invoice_from_state","invoice_from_state_code","tl_gst_no","invoice_to_state","invoice_to_state_code","client_gst_no","client_gst_address","dispatch_address","gm_code","gst_exemption","sl_no","revenue_location","invoice_version","associate/trainee_count","gtl_cost","insurance_others_ctc","insurance_charges","labour_welfare_fund","edli_admin_charges","employee_compensation","ctc_stipend","imprest","loan","salary_advance_payment","reimbursement","others_cheque_printing_charges","loan_recovery","advance_recovery","imprest_recovery","setup_fees","pf_service_charges","absorption_fee","mark_up_administration_fee","gross_total","taxable_total","service_tax_(12/14%)","edu_cess_(2%_on_st)","sec_&_high_edu_cess(1%_on_st)","sb_cess_(0.5%_on_gross)","kk_cess(0.5%_on_gross)","sgst","cgst","igst","sub_total","bus_deduction","canteen_deduction","other_deduction","notice_recovery","invoice_total","service_tax/gst_%","against_invoice_no","remarks","invoice_status","finance_approved_by","ops_approved_by","billing_case_no"];
  
      for (var i = 1; i < lines.length/10; i++) {
  
          var obj = {};
          var currentline = lines[i].split(",");
  
          for (var j = 0; j < headers.length; j++) {
              obj[headers[j]] = currentline[j];
          }
  
          result.push(obj);
  
      }
  
      //return result; //JavaScript object
      console.log(JSON.stringify(result[2]));
      return result; //JSON
  }

  public csvJSONFull(csv) {
    var lines = csv.toString().split("\n");
 
    var result = [];

    var headers = ["month","invoice_nos","invoice_date","invoice_module","invoice_description","invoice_type","split_type","split_value","processing_month","processing_year","client_name","client_id","corp_name","corp_id","mandate_type","client_status","invoice_from_state","invoice_from_state_code","tl_gst_no","invoice_to_state","invoice_to_state_code","client_gst_no","client_gst_address","dispatch_address","gm_code","gst_exemption","sl_no","revenue_location","invoice_version","associate/trainee_count","gtl_cost","insurance_others_ctc","insurance_charges","labour_welfare_fund","edli_admin_charges","employee_compensation","ctc_stipend","imprest","loan","salary_advance_payment","reimbursement","others_cheque_printing_charges","loan_recovery","advance_recovery","imprest_recovery","setup_fees","pf_service_charges","absorption_fee","mark_up_administration_fee","gross_total","taxable_total","service_tax_(12/14%)","edu_cess_(2%_on_st)","sec_&_high_edu_cess(1%_on_st)","sb_cess_(0.5%_on_gross)","kk_cess(0.5%_on_gross)","sgst","cgst","igst","sub_total","bus_deduction","canteen_deduction","other_deduction","notice_recovery","invoice_total","service_tax/gst_%","against_invoice_no","remarks","invoice_status","finance_approved_by","ops_approved_by","billing_case_no"];

    for (var i = 1; i < lines.length; i++) {

        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);

    }

    //return result; //JavaScript object
    return result; //JSON
}

    ConvertToCSV(objArray, headerList) {
         let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
         let str = '';
         let row = 'S.No,';

         for (let index in headerList) {
             row += headerList[index] + ',';
         }
         row = row.slice(0, -1);
         str += row + '\r\n';
         for (let i = 0; i < array.length; i++) {
             let line = (i+1)+'';
             for (let index in headerList) {
                let head = headerList[index];

                 line += ',' + array[i][head];
             }
             str += line + '\r\n';
         }
         console.log(str);
         return str;
     }

     public getJSON(): Observable<any> {
        return this.http.get("./assets/Reimbursment.json",{responseType: 'text'});
    }

    private handleError (error: HttpErrorResponse) {
      
          let message = {};
      
        message=error;
    
          // TODO: send the error to remote logging infrastructure
          //console.error(error.message); // log to console instead
          // TODO: better job of transforming error for user consumption
          console.log(` failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return throwError(
            message);
        
      }

    private getEventMessage(event: HttpEvent<any>) {

        switch (event.type) {
          case HttpEventType.Response:
            return this.apiResponse(event);
    
          default:
            return `File  surprising upload event: ${event.type}.`;
        }
      }
     private apiResponse(event) {
        return event.body;
      }
      public getYearandMonth(){
         this.http.get('assets/config.json').subscribe(
          (resunt)=>{
           this.month=JSON.parse(JSON.stringify(resunt)).month;
            this.year=JSON.parse(JSON.stringify(resunt)).year;
          }
         );
      }
      downloadfconsolidatedJSon(reportname,monthss){
        
        let  headers= new HttpHeaders({
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/csv"

        })
     
         return this.http.get(apiUrl.consolidated+reportApi.get(reportname)+'/downloadcsv',{ headers,responseType: 'text',params: {
          month: monthss+1,
          year: this.year
        }}).pipe(
        (result)=>{
          return result
        }
     ); 
     
    }

    downloadconsolidatedcsv(filename,month): Observable<any> {
      let  headers= new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/csv",
        "Content-Type": "text/csv"
     //   "Authorization":"bearer" + 'sss'// this.token.getDecodedAccessToken()
      });
      const options = {  responseType: 'text' as 'text', params: {
        month: month+1,
        year: this.year
      },};
     return this.http.get(apiUrl.consolidated+reportApi.get(filename)+'/downloadcsv',options).pipe(
      map(
        result=>{
      let blob = new Blob(['\ufeff' + result], { type: 'application/csv;charset=utf-8;' });
      let dwldLink = document.createElement("a");
      let url = URL.createObjectURL(blob);
      let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
      if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
          dwldLink.setAttribute("target", "_blank");
      }
      dwldLink.setAttribute("href", url);
      dwldLink.setAttribute("download", filename + ".csv");
      dwldLink.style.visibility = "hidden";
      document.body.appendChild(dwldLink);
      dwldLink.click();
      document.body.removeChild(dwldLink);
     }),
     catchError(this.handleError)
     );
    }
}




 /*
      let httpOptionbearer = {
        headers: new HttpHeaders({
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/csv",
          "Content-Type": "text/csv",
          "Authorization":"bearer" + this.token.getDecodedAccessToken()
        })
      };

  
        let headers=[]; 
       for(let i=1;i<data.length;i++){
        headers.push(data[i]);
       }
        let csvData = this.ConvertToCSV(data, headers);
        let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);*/
        /*let options ={
          headers:httpOptionbearer,
          responseType: 'text'
        }*/