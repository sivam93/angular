import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { FinancialexceptionsComponent } from 'src/app/modules/collections/views/pages/financialexceptions/financialexceptions.component';
import { FedetailsComponent } from 'src/app/modules/collections/views/pages/financialexceptions/fedetails/fedetails.component';

import { FeListComponent } from 'src/app/modules/collections/views/pages/financialexceptions/fe-list/fe-list.component';
import { AgreementexpiredComponent } from 'src/app/modules/collections/views/pages/financialexceptions/fe-types/agreementexpired/agreementexpired.component';
import { PreviousdueComponent } from 'src/app/modules/collections/views/pages/financialexceptions/fe-types/previousdue/previousdue.component';
import { FuturedatepdcComponent } from 'src/app/modules/collections/views/pages/financialexceptions/fe-types/futuredatepdc/futuredatepdc.component';
import { AdvancepoolComponent } from 'src/app/modules/collections/views/pages/financialexceptions/fe-types/advancepool/advancepool.component';
import { ZeronetpayComponent } from 'src/app/modules/collections/views/pages/financialexceptions/fe-types/zeronetpay/zeronetpay.component';
import { FeExcinfoComponent } from '../../../views/pages/financialexceptions/fe-excinfo/fe-excinfo.component';
import { LockstatusComponent } from '../../../views/pages/financialexceptions/fe-types/lockstatus/lockstatus.component';
import { FeActionsComponent } from '../../../views/pages/financialexceptions/fe-actions/fe-actions.component';

import { SharedModule } from 'src/app/modules/shared/shared.module';
const sharedRoutes: Routes = [
    {
        path:'',
        component:FinancialexceptionsComponent
    }
];

@NgModule({
    declarations:[
        FinancialexceptionsComponent,
        FedetailsComponent,
        FeListComponent,
        AgreementexpiredComponent,
        PreviousdueComponent,
        FuturedatepdcComponent,
        AdvancepoolComponent,
        ZeronetpayComponent,
        LockstatusComponent,
        FeExcinfoComponent,
        FeActionsComponent    
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
      SharedModule
    ],
    exports: [RouterModule]
  })
  export class FERouteModule { }