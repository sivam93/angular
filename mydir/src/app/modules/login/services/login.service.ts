import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../api/api';
import { catchError,tap  } from "rxjs/operators";
import { ErrorhandlerService } from 'src/app/services/errorhandler/errorhandler.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  token: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private error:ErrorhandlerService
  ) {
    
   }
   

  getUrl(data:any) {
    return this.http.post(apiUrl.apiUrl+'user/authenticate',data).pipe(
      tap(data),
      catchError(
        this.error.handleError)
    );
  }

  set setUserLoggedIn(data: any){
   
    this.token = data;
    localStorage.setItem("token",JSON.stringify(this.token));
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("month");
  }
  
}
