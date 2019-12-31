import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InputsComponent } from "src/app/modules/inputs/views/shell/inputs.component"

const sharedRoutes: Routes = [
    {
        path:'',
        component:InputsComponent
    }
];

@NgModule({
    declarations:[
        InputsComponent
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
    ],
    exports: [RouterModule]
  })
  export class InputRouteModule { }