import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "src/app/modules/dashboard/views/shell/dashboard.component"

const sharedRoutes: Routes = [
    {
        path:'',
        component:DashboardComponent
    }
];

@NgModule({
    declarations:[
        DashboardComponent
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
    ],
    exports: [RouterModule]
  })
  export class DashboardRouteModule { }