import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SalaryprocessComponent } from 'src/app/modules/collections/views/pages/salaryprocess/salaryprocess.component';
import { SpdetailsComponent } from 'src/app/modules/collections/views/pages/salaryprocess/spdetails/spdetails.component';

import { SharedModule } from 'src/app/modules/shared/shared.module';

const sharedRoutes: Routes = [
    {
        path:'',
        component:SalaryprocessComponent
    }
];

@NgModule({
    declarations:[
        SalaryprocessComponent,
        SpdetailsComponent,
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
      SharedModule
    ],
    exports: [RouterModule]
  })
  export class SalaryProcessRouteModule { }