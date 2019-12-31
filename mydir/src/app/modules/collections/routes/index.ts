import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Main Nav Components
import { CollectionsComponent } from 'src/app/modules/collections/views/shell/collections.component';
import { ClientdetailsComponent } from 'src/app/modules/collections/views/pages/clientdetails/clientdetails.component';
import { AnchordetailsComponent } from 'src/app/modules/collections/views/pages/anchordetails/anchordetails.component';
import { AssignclientsComponent } from 'src/app/modules/collections/views/pages/assignclients/assignclients.component';
import { ReassignclientsComponent } from 'src/app/modules/collections/views/pages/reassignclients/reassignclients.component';


// Sub Components


import { ChartPieComponent } from 'src/app/modules/collections/components/charts/chart-pie/chart-pie.component';
import { ChartLineComponent } from 'src/app/modules/collections/components/charts/chart-line/chart-line.component';
import { ChartBarComponent } from 'src/app/modules/collections/components/charts/chart-bar/chart-bar.component';

import { StatsComponent } from 'src/app/modules/collections/components/stats/stats.component';

import { TabsComponent } from 'src/app/modules/collections/components/tabs/tabs.component';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';
import { SharedModule } from '../../shared/shared.module';


const sharedRoutes: Routes = [
  {
      path:"",
      component:CollectionsComponent,
      children:[
        {
          path: '',
          redirectTo: 'untagged',
          pathMatch:'full',
        },
        {
          path: 'untagged',
          // loadChildren: () => import("../submodules/untagged/untagged.module").then(mod => mod.UntaggedModule)
          loadChildren : '../submodules/untagged/untagged.module#UntaggedModule'
        },
        {
          path:"mostprobablematch",
          // loadChildren: () => import("../submodules/mostprobablematch/mostprobablematch.module").then(mod => mod.MostprobablematchModule)
          loadChildren : '../submodules/mostprobablematch/mostprobablematch.module#MostprobablematchModule'
        },
        {
          path:"financialexceptions",
          // loadChildren: () => import('../submodules/financialexceptions/fe.module').then(mod => mod.FeModule)
          loadChildren : '../submodules/financialexceptions/fe.module#FeModule'
        },
        {
          path:"salaryrelease",
          // loadChildren: () => import('../submodules/salaryrelease/salaryrelease.module').then(mod => mod.SalaryreleaseModule)
          loadChildren : '../submodules/salaryrelease/salaryrelease.module#SalaryreleaseModule'
        },
        {
          path:"salaryprocess",
          // loadChildren:() => import('../submodules/salaryprocess/salaryprocess.module').then(mod => mod.SalaryprocessModule)
          loadChildren:'../submodules/salaryprocess/salaryprocess.module#SalaryprocessModule'
        },
      ]
    },
    {
      path:"clientdetails/:id",
      component:ClientdetailsComponent
    },
    {
      path:"anchordetails/:clientid/:id",
      component:AnchordetailsComponent
    },
    {
      path:"assignclients/:clientid/:id",
      component:AssignclientsComponent
    },
    {
      path:"reassignclients/:clientid/:id",
      component:ReassignclientsComponent
    }
];


const mainNav = [
  CollectionsComponent,
];


const components = [
  
  ChartPieComponent,
  ChartLineComponent,
  ChartBarComponent,
  StatsComponent,
  TabsComponent,
  ClientdetailsComponent,
  AnchordetailsComponent,
  AssignclientsComponent,
  ReassignclientsComponent
]



@NgModule({
  declarations:[
    ...mainNav,
    ...components,
  ],
  imports: [
    RouterModule.forChild(sharedRoutes),
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    RouterModule,
  ],
  providers:[AuthGuardService],
})
export class CollectionsRoutingModule { }


