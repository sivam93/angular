import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FERouteModule } from './routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FERouteModule,
    SharedModule
  ]
})
export class FeModule { }
