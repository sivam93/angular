import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  tokenInfo: any;
  roleid : number;

  constructor(
    private token: TokenService,
    private router: Router,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.tokenInfo = this.token.getDecodedAccessToken();
    this.roleid =   this.tokenInfo.Role_id;
    if(this.roleid == 3)
    {
      this.router.navigate(['login'],{
        queryParams:{returnUrl:state.url}
      });
    }
    else 
    {
      return true;
    }
  }

}
