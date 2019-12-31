import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SalaryreleaseComponent } from 'src/app/modules/collections/views/pages/salaryrelease/salaryrelease.component';
import { SrdetailsComponent } from 'src/app/modules/collections/views/pages/salaryrelease/srdetails/srdetails.component';

import { SharedModule } from 'src/app/modules/shared/shared.module';
const sharedRoutes: Routes = [
    {
        path:'',
        component:SalaryreleaseComponent
    }
];

@NgModule({
    declarations:[
        SalaryreleaseComponent,
        SrdetailsComponent,
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
      SharedModule
    ],
    exports: [RouterModule]
  })
  export class SalaryReleaseRouteModule { }