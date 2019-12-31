import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { ReconcillationComponent } from "src/app/modules/reconcilation/views/shell/reconcillation.component"
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';
import { ChartPieComponent } from 'src/app/modules/reconcilation/components/chart-pie/chart-pie.component';
const sharedRoutes: Routes = [
    {
        path:'',
        component:ReconcillationComponent,
        children:[
            
              {
                path: 'uploads',
                // loadChildren: () => import("../submodules/untagged/untagged.module").then(mod => mod.UntaggedModule)
                loadChildren : '../submodules/uploads/uploads.module#UploadsModule'
                },
                {
                  path: 'consolidatedReports',
                  // loadChildren: () => import("../submodules/untagged/untagged.module").then(mod => mod.UntaggedModule)
                  loadChildren : '../submodules/consolidated/consolidated.module#ConsolidatedModule'
                  },
                  {
                    path: 'comparisonReports',
                    // loadChildren: () => import("../submodules/untagged/untagged.module").then(mod => mod.UntaggedModule)
                    loadChildren : '../submodules/comparison/comparison.module#ComparisonModule'
                    },
                    {
                      path: 'finaloutReports',
                      // loadChildren: () => import("../submodules/untagged/untagged.module").then(mod => mod.UntaggedModule)
                      loadChildren : '../submodules/finalouts/finalout.module#FinalOutModule'
                      }
            
        ]
    }
    
];

@NgModule({
    declarations:[
        ReconcillationComponent,
        ChartPieComponent
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
      FormsModule,
      SharedModule
      
    ],
    exports: [RouterModule],
    providers:[AuthGuardService]
  })
  export class ReconcillationRouteModule { }