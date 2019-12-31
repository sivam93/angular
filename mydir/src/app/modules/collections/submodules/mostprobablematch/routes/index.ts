import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MostprobablematchComponent } from 'src/app/modules/collections/views/pages/mostprobablematch/mostprobablematch.component';
import { MostprobablematchdetailsComponent } from 'src/app/modules/collections/views/pages/mostprobablematch/mostprobablematchdetails/mostprobablematchdetails.component';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RoleGuard } from 'src/app/services/roles/role.guard';
const sharedRoutes: Routes = [
    {
        path:'',
        component:MostprobablematchComponent,
        canActivate:[RoleGuard]
    }
];

@NgModule({
    declarations:[
        MostprobablematchComponent,
        MostprobablematchdetailsComponent,
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
      SharedModule
    ],
    exports: [RouterModule]
  })
  export class MPMRouteModule { }