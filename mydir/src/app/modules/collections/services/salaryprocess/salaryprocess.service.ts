import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SALARYPROCESS } from 'src/app/models/salaryprocess';
import { apiUrl } from 'src/app/api/api';
import { Observable } from 'rxjs';
import { catchError,tap  } from "rxjs/operators";
import { TokenService } from 'src/app/services/token/token.service';
import { ErrorhandlerService } from 'src/app/services/errorhandler/errorhandler.service';

@Injectable({
  providedIn: 'root'
})
export class SalaryprocessService {


  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private error:ErrorhandlerService
  ) { }
  
  getsalaryProcess(data:any): Observable<SALARYPROCESS[]>{
    const postData = this.tokenService.getToken(data);
    return this.http.post<SALARYPROCESS[]>(apiUrl.salaryProcess,postData).pipe(
      tap(data => console.log("Salary Processed datas : "+data.length)),
      catchError(this.error.handleError)
    );
  }



}
