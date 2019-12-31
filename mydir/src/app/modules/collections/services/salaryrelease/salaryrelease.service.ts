import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SALARYRELEASE } from 'src/app/models/salaryrelease';
import { apiUrl } from 'src/app/api/api';
import { Observable } from 'rxjs';
import { catchError,tap  } from "rxjs/operators";
import { TokenService } from 'src/app/services/token/token.service';
import { ErrorhandlerService } from 'src/app/services/errorhandler/errorhandler.service';

@Injectable({
  providedIn: 'root'
})
export class SalaryreleaseService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private error: ErrorhandlerService
  ) { }

  getSalarayRelease(data:any): Observable<SALARYRELEASE[]>{
    const postData = this.tokenService.getToken(data);
    return this.http.post<SALARYRELEASE[]>(apiUrl.salaryRelease,postData).pipe(
      tap(data => console.log("Salary Released datas : "+data.length)),
      catchError(this.error.handleError)
    );
  }

}
