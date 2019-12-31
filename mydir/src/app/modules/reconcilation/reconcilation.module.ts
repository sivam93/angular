import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReconcillationRouteModule} from './routes';
import {MatProgressBarModule,MatSnackBarModule,MatDialogModule} from '@angular/material';
import { reducers } from 'src/app/modules/collections/store/reducers';
import { StoreModule } from '@ngrx/store';
import{ConfirmationDialog} from 'src/app/modules/reconcilation/views/pages/uploads/uploads.component';
import {ConfirmationDialogConsol} from 'src/app/modules/reconcilation/views/pages/consolidated/consolidated.component';



@NgModule({
  declarations: [ConfirmationDialog,ConfirmationDialogConsol],
  imports: [
    CommonModule,
    ReconcillationRouteModule,MatProgressBarModule,MatSnackBarModule,MatDialogModule,
    StoreModule.forFeature('products',reducers),
  ],
  entryComponents: [ConfirmationDialog,ConfirmationDialogConsol]
})
export class ReconcilationModule { }
