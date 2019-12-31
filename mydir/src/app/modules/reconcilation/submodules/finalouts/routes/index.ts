import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FinalOutComponent } from '../../../views/pages/finalout/finalout.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { RoleGuard } from 'src/app/services/roles/role.guard';


const sharedRoutes: Routes = [
    {
        path:'',
        component:FinalOutComponent,
        canActivate:[RoleGuard]
    }
];

@NgModule({
    declarations:[
        FinalOutComponent
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
      SharedModule,
      NgxPaginationModule
    ],
    exports: [RouterModule]
  })
  export class FinalModuleRouteModule { }