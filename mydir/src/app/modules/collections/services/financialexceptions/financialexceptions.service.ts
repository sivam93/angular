import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FE } from 'src/app/models/financialexceptions';
import { httpOptions,apiUrl } from 'src/app/api/api';
import { Observable, throwError } from 'rxjs';
import { catchError,tap  } from "rxjs/operators";
import { TokenService } from 'src/app/services/token/token.service';
import { ErrorhandlerService } from 'src/app/services/errorhandler/errorhandler.service';

@Injectable({
  providedIn: 'root'
})
export class FinancialexceptionsService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private error:ErrorhandlerService
  ) { }
  
  getFEContent(data): Observable<FE[]>{
    const postData = this.tokenService.getToken(data);
    return this.http.post<FE[]>(apiUrl.financialexceptions,postData).pipe(
      tap(data => console.log("FE Data : "+data.length)),
      catchError(this.error.handleError)
    );
  }

  updateFEContent(data :any) : Observable<FE[]>{
    return this.http.post<FE[]>(apiUrl.financialexceptionsUpdate,data,httpOptions).pipe(
      tap(res => {
      }),
      catchError(this.error.handleError)
    ); 
  }

  processFEContent(data :any) : Observable<FE[]>{
    return this.http.post<FE[]>(apiUrl.financialexceptionsProcess,data,httpOptions).pipe(
      tap(res => {
        console.log("process fe data"+res);
      }),
      catchError(this.error.handleError)
    ); 
  }

}
