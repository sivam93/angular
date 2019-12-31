import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MOSTPROBABLEMATCH } from 'src/app/models/mostprobablematch';
import { httpOptions,apiUrl } from 'src/app/api/api';
import { Observable } from 'rxjs';
import { catchError,tap  } from "rxjs/operators";
import { TokenService } from 'src/app/services/token/token.service';
import { ErrorhandlerService } from 'src/app/services/errorhandler/errorhandler.service';

@Injectable({
  providedIn: 'root'
})
export class MostprobablematchService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private error:ErrorhandlerService
  ) { }
  
  getMpm(data): Observable<MOSTPROBABLEMATCH[]>{
    
    return this.http.post<MOSTPROBABLEMATCH[]>(apiUrl.mostprobablematch,this.tokenService.getToken(data)).pipe(
      tap(data => console.log("Most Probable Datas datas : "+data.length)),
      catchError(this.error.handleError)
    );
  }

  postMpm(data: any): Observable<MOSTPROBABLEMATCH[]>{
    return this.http.post<MOSTPROBABLEMATCH[]>(apiUrl.mostprobablematchpost,data,httpOptions).pipe(
      tap(res => {
        console.log("mostprobablematch data processed");
      }),
      catchError(this.error.handleError)
    );  
  }


}
