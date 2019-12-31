import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/modules/shared/shared.module';


import { RoleGuard } from 'src/app/services/roles/role.guard';
import { UploadsComponent } from '../../../views/pages/uploads/uploads.component';
import {MatProgressBarModule} from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';


const sharedRoutes: Routes = [
    {
        path:'',
        component:UploadsComponent,
        canActivate:[RoleGuard]
    }
];

@NgModule({
    declarations:[
        UploadsComponent
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
      SharedModule,
      MatProgressBarModule,
      NgxSpinnerModule
    ],
    exports: [RouterModule]
  })
  export class UploadsRouteModule { }