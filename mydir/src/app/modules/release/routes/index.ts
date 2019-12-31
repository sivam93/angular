import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReleaseComponent } from "src/app/modules/release/views/shell/release.component"

const sharedRoutes: Routes = [
    {
        path:'',
        component:ReleaseComponent
    }
];

@NgModule({
    declarations:[
        ReleaseComponent
    ],
    imports: [
      RouterModule.forChild(sharedRoutes),
      CommonModule,
    ],
    exports: [RouterModule]
  })
  export class ReleaseRouteModule { }