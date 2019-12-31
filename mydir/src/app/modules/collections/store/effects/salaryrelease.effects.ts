import { Injectable } from '@angular/core';
import { SalaryreleaseService } from 'src/app/modules/collections/services/salaryrelease/salaryrelease.service';
import { Effect,Actions,ofType } from '@ngrx/effects';

import * as srActions from "../actions/salaryrelease.action";
import { map, catchError, switchMap, mapTo } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Injectable()
export class srEffects  {
    constructor(
        private service: SalaryreleaseService,
        private actions$: Actions
    ){}

   

    @Effect() loadSR$ = this.actions$
    .pipe(
        ofType(srActions.LOAD_STBR),
        switchMap((action: srActions.loadSTBRAction) => this.service.getSalarayRelease(action.payload)
          .pipe(
            map(data => (new srActions.loadSTBRSuccessAction(data))),
            catchError(() => EMPTY)
          ))
    )
     

    
}