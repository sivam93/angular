import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { pdccycle } from 'src/app/models/pdc';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: string;
  tokenDet : any;
  tokenInfo : any;
  constructor() { 
  }

  verify()
  {
    let date = new Date();
    let dateString = date.getTime() / 1000;
    this.tokenDet = this.getDecodedAccessToken();
    const validate = (this.tokenDet !== null && this.tokenDet != undefined  && (this.tokenDet.exp > dateString));
    console.log(validate);
    return  {
      validate,
      ...this.tokenDet
    }; 
  }

  getDecodedAccessToken(): any {

    this.token = localStorage.getItem("token");
    try{
        return jwt_decode(this.token);
    }
    catch(Error){
        return null;
    }
  }
  getToken(data:pdccycle)
  {
    this.tokenDet = this.getDecodedAccessToken();
    if(this.tokenDet != undefined && this.tokenDet !== null)
    {
      this.tokenInfo = {
        anchor_id : this.tokenDet.user_id,
        pdc_year : data.year,
        pdc_month : data.month,
        role_id: this.tokenDet.Role_id,
      }
      return this.tokenInfo;
    }
  }

  getRoleID()
  {
    this.tokenDet = this.getDecodedAccessToken();
    if(this.tokenDet != undefined && this.tokenDet !== null)
    {
      return this.tokenDet.Role_id;
    }
  }

}
