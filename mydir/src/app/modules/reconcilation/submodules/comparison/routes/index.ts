import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ComparisonComponent } from '../../../views/pages/comparison/comparison.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { RoleGuard } from 'src/app/services/roles/role.guard';
import { MatPaginatorModule,MatSortModule,MatTableModule,MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';



const sharedRoutes: Routes = [
    {
        path:'',
        component:ComparisonComponent,
        canActivate:[RoleGuard]
    }
];

@NgModule({
    declarations:[
        ComparisonComponent
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
      SharedModule,
      NgxPaginationModule,
      MatPaginatorModule,
      MatSortModule,
      MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      NgxSpinnerModule,
      MatProgressSpinnerModule
    ],
    exports: [RouterModule]
  })
  export class ComparisonModuleRouteModule { }