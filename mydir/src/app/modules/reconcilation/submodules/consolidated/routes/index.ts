import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ConsolidatedComponent } from '../../../views/pages/consolidated/consolidated.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule,MatSortModule,MatTableModule,MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';


import { RoleGuard } from 'src/app/services/roles/role.guard';


const sharedRoutes: Routes = [
    {
        path:'',
        component:ConsolidatedComponent,
        canActivate:[RoleGuard]
    }
];

@NgModule({
    declarations:[
        ConsolidatedComponent
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
      SharedModule,
      NgxPaginationModule,
      NgxSpinnerModule,
      MatProgressSpinnerModule,
      MatPaginatorModule,
      MatSortModule,
      MatTableModule,
      MatFormFieldModule,
      MatInputModule
  
    ],
    exports: [RouterModule]
  })
  export class ConsolidatedModuleRouteModule { }