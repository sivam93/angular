import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host:{
    '(document:click)': 'onClick($event)',
  }
})
export class HeaderComponent implements OnInit {
  name:string;
  exactName:string;
  isUserLoggedIn: boolean;
  tokenInfo:any;
  menu:boolean = false;
  constructor(
    private router: Router,
    private token: TokenService,
    private login: LoginService  
  ) {}

  ngOnInit() {
    this.tokenInfo = this.token.getDecodedAccessToken();
      this.name = this.tokenInfo.emp_name;
    this.exactName = "guest";//this.name.substr(0,1);
    
    
  }

  logout(){
    this.login.logout();
    this.router.navigateByUrl('/login');
   
  }

  openMenu(event)
  {
    event.stopPropagation()
    this.menu = !this.menu;
  }

  onClick(event){
    this.menu = false;
  }

  

}
