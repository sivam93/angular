import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceComponent } from "src/app/modules/invoice/views/shell/invoice.component"

const sharedRoutes: Routes = [
    {
        path:'',
        component:InvoiceComponent
    }
];

@NgModule({
    declarations:[
        InvoiceComponent
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
    ],
    exports: [RouterModule]
  })
  export class InvoiceRouteModule { }