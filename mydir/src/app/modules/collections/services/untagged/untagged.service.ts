import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UNTAGGED } from 'src/app/models/untagged';
import { httpOptions,apiUrl } from 'src/app/api/api';
import { Observable } from 'rxjs';
import { catchError,tap  } from "rxjs/operators";
import { TokenService } from 'src/app/services/token/token.service';
import { ErrorhandlerService } from 'src/app/services/errorhandler/errorhandler.service';
import { pdccycle } from 'src/app/models/pdc';

@Injectable({
  providedIn: 'root'
})
export class UntaggedService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private error:ErrorhandlerService
  ) { 
  }
  
  untagged(data:any): Observable<UNTAGGED[]>{
    const postData:pdccycle = this.tokenService.getToken(data);
    return this.http.post<UNTAGGED[]>(apiUrl.untagged,postData)
    .pipe(
      tap(data => console.log("Untagged datas : "+data.length)),
      catchError(this.error.handleError)
    );
  }

  postUntaggedContent(data: any): Observable<UNTAGGED[]>{
    return this.http.post<UNTAGGED[]>(apiUrl.untaggedpost,data,httpOptions).pipe(
      tap(res => {
        console.log("Untagged data processed");
      }),
      catchError(this.error.handleError)
    );  
  }
}
