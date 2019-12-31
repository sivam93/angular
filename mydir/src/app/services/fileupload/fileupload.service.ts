import { Injectable } from '@angular/core';
import { apiUrl } from 'src/app/api/api';
import { catchError, map } from "rxjs/operators";
import { ErrorhandlerService } from 'src/app/services/errorhandler/errorhandler.service';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
  import { TokenService } from 'src/app/services/token/token.service';
import { HeadingComponent } from 'src/app/components/heading/heading.component';

const url = 'http://r2rdev.teamlease.com/R2RBackend/api/';
const reportApi= new Map([["Invoice Offline","invoice"],
["Associate Release Offline","associate"],
["Reimbursement Offline","reimburse"],
["AccPac Offline","accpac"],
["Salary Offline","salary"]]);

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
  })
};
@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
   
  constructor(
    private http: HttpClient,
    private error: ErrorhandlerService,
    private token:TokenService
  ) {}

  upload(formData,api) {

    return this.http.post<any>(apiUrl.apiUrl+reportApi.get(api)+'/upload', formData, {
      headers: new HttpHeaders({
       // "Authorization":"bearer" + "ssss"// this.token.getDecodedAccessToken()
      }),
      reportProgress: true,
      observe: "events"
    }).pipe(
      map(event => this.getEventMessage(event, formData)),
      catchError(this.handleError)
    );
  }

  private getEventMessage(event: HttpEvent<any>, formData) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
      case HttpEventType.Response:
        let sample=this.apiResponse(event);
        return sample;
      default:
        return `File  surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone};
  }
  private apiResponse(event) {
    //console.log("*****event" + event);
    let ress= JSON.parse(JSON.stringify(event.body));
    
    return ress;
  }
  
  uploadJson(formData,api): Observable<any> {
    let httpOptionbearer = {
      headers: new HttpHeaders({
        //"Authorization":"bearer" + 'sss'//this.token.getDecodedAccessToken()
      })
    };
 
    return this.http.post<any>(apiUrl.apiUrl+reportApi.get(api)+'/upload', formData, httpOptionbearer).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let message = {};
    if (err.status==401){
      message=err;
    }else if
    (err.error.isSuccessful==false){
      message={"status":err.status,"message":err.error}
     }
     else{
     message= {"status":err.status,"message":{"message":"File with empty/undefined datatype","isSuccessfull":true}}
        let blob = new Blob(['\ufeff' + err.error], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", 'ErrorFileDescrption' + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
      }
    
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error('Backend error occurred:', message);

    }
    // return an observable with a user-facing error message
    return throwError(
      message);
  };

  /*private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
     // console.log(`${operation} failed: ${error.message}`);
     // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }*/

  private extractData(res: Response) {
    let ress= JSON.parse(JSON.stringify(res));
    return ress || {};
  }

  getTokenAuth(formData): Observable<any> {
    return this.http.post<any>(apiUrl.apiUrl + 'user/authenticate', formData, {
      headers: {
        "Content-Type": "application/json"
      }
    }).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

}
