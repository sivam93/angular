import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/modules/login/views/login.component';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    resolve: [AuthGuardService]
  }
];

@NgModule({
  declarations:[
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class LoginRouting { }