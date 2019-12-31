import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { UntaggedComponent } from 'src/app/modules/collections/views/pages/untagged/untagged.component';
import { UntaggedDetailsComponent } from 'src/app/modules/collections/views/pages/untagged/untagged-details/untagged-details.component';
import { StatusComponent } from 'src/app/modules/collections/components/status/status.component';
import { ActionsComponent } from 'src/app/modules/collections/components/actions/actions.component';

import { RoleGuard } from 'src/app/services/roles/role.guard';


const sharedRoutes: Routes = [
    {
        path:'',
        component:UntaggedComponent,
        canActivate:[RoleGuard]
    }
];

@NgModule({
    declarations:[
        UntaggedComponent,
        UntaggedDetailsComponent,
        StatusComponent,
        ActionsComponent
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
      SharedModule
    ],
    exports: [RouterModule]
  })
  export class UntaggedRouteModule { }