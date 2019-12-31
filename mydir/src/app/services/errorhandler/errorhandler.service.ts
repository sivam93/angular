import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  constructor() { }

  handleError(err: HttpErrorResponse)
  {
    let errorMessage = "";
    
    
      errorMessage = `Server returned code: ${err.status}, error message is ${err.error.message}`;
    
   
    return throwError(err);
  }
}
