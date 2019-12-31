import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { roles } from 'src/app/api/api';
@Injectable({
  providedIn: 'root'
})
export class RolesService {
  roleid:any;
  constructor(private token:TokenService) { 
  }

  getAnchorRoles(){
    this.roleid = this.token.getRoleID();
    return (this.roleid == roles.OpsAnchor || this.roleid == roles.FinanceAnchor);
  }

  getManagerRoles(){
    this.roleid = this.token.getRoleID();
    return (this.roleid == roles.OpsManager || this.roleid == roles.FinanceManager);
  }

}
