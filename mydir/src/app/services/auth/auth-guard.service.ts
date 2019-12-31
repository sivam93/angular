import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import {Router} from '@angular/router'
import { TokenService } from '../token/token.service';
import { LoginService } from 'src/app/modules/login/services/login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  tokenInfo: any;
  roleid : number;
  constructor(
    private token: TokenService,
    private router: Router,
    private login: LoginService
  ) {}

   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     if(this.token.verify().validate)
     {
      return true;
     }
     else {
      this.login.logout();
      this.router.navigate(['login'],{
        queryParams:{returnUrl:state.url}
      });
     }
   }


   resolve():void {

      console.log("resolve");
      let val = this.token.verify().validate;
      if(val)
      {
        this.tokenInfo = this.token.getDecodedAccessToken();
        this.roleid = this.tokenInfo.Role_id;
        if(val && (this.roleid == 1 || this.roleid == 2))
          this.router.navigateByUrl('/home/reconcillation')
        else if(val && this.roleid == 3) 
          this.router.navigateByUrl('/home/collections/financialexceptions')
      }
     
      
  }
}
