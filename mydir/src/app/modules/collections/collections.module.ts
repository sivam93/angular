import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CollectionsRoutingModule } from 'src/app/modules/collections/routes/index';
import { reducers } from 'src/app/modules/collections/store/reducers';

import { 
  untaggedEffects,
  feEffects,
  MPMEffects,
  dashboardEffects,
  srEffects,
  spEffects
} from 'src/app/modules/collections/store/effects';

const effects = [
  untaggedEffects,
  feEffects,
  MPMEffects,
  dashboardEffects,
  srEffects,
  spEffects 
]
 

@NgModule({
  declarations: [],
  imports:[
    CollectionsRoutingModule,
    CommonModule,
    StoreModule.forFeature('products',reducers),
    EffectsModule.forFeature([...effects]),
  ],
  providers: [
  ],
})
export class CollectionsModule { }
