import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { TOTALINVOICES } from "src/app/models/dashboard/totalinvoices"
import { apiUrl } from 'src/app/api/api';
import { TokenService } from 'src/app/services/token/token.service';
import { ErrorhandlerService } from 'src/app/services/errorhandler/errorhandler.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private error: ErrorhandlerService  
  ) { }
  getToken(): any
  {
    return this.tokenService.getDecodedAccessToken();
  }
  getData(data: any): Observable<TOTALINVOICES>{
    const postData = this.tokenService.getToken(data);
    return this.http.post<TOTALINVOICES>(apiUrl.totalinvoices,postData).pipe(
      tap(data => {}),
      catchError(this.error.handleError)
    );
  }

  
}
