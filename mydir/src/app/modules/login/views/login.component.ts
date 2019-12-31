import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { TokenService } from 'src/app/services/token/token.service';
import { roles } from "../../../api/api";


interface loginValues {
  Username: string;
  Password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  loginText: string = "LOGIN";
  returnUrl: string;
  loginStatus: boolean = false;
  showError: boolean;
  errorText: string;

  formValues: loginValues = {
    Username: null,
    Password: null,
  }

  tokenInfo: any;
  roleid: number;

  constructor(
    private router: Router,
    private logservice: LoginService,
    private route: ActivatedRoute,
    private token: TokenService,
    private hostElement: ElementRef
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }


  login(form: NgForm) {
    this.loginText = "";
    this.errorText = "";
    this.loginStatus = true;
    this.formValues = {
      Username: this.formValues.Username,
      Password: this.formValues.Password
    }

    this.logservice.getUrl(this.formValues).subscribe(
      (data: any) => {
        this.loginStatus = true;
        this.logservice.setUserLoggedIn = data.auth_token;
        this.tokenInfo = this.token.getDecodedAccessToken();
        this.roleid = this.tokenInfo.Role_id;

        if (data.auth_token != null)
          this.router.navigateByUrl('/reconcillation/uploads');
        /*  else if(this.roleid == roles.OpsAnchor || this.roleid == roles.OpsManager)
            this.router.navigateByUrl('/reconcillation');
          else if(this.roleid == roles.FinanceAnchor)
            this.router.navigateByUrl('/reconcillation');*/
      },
      (err) => {

        this.loginStatus = false;
        this.loginText = "LOGIN";
        if (err.status === 401) {
          this.showError = true;
          this.errorText = "Username and Password does not Matches"
        }
        else {
          this.showError = true;
          this.errorText = "Network Error"
        }
      });
  }

}
