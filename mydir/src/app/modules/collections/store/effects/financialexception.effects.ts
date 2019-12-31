import { Injectable } from '@angular/core';
import { FinancialexceptionsService } from 'src/app/modules/collections/services/financialexceptions/financialexceptions.service';
import { Effect,Actions,ofType } from '@ngrx/effects';

import * as feActions from "../actions/financialexceptions.action";
import { map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class feEffects {
    constructor(
        private fe: FinancialexceptionsService,
        private actions$: Actions
    ){}

    @Effect() loadFE$ = this.actions$
    .pipe(
        ofType(feActions.LOAD_FE),
        switchMap((action : feActions.loadFEAction) => this.fe.getFEContent(action.payload)
          .pipe(
            map(data => (new feActions.loadFESuccessAction(data))),
            catchError(() => EMPTY)
          ))
    )

    @Effect() updateFE$ = this.actions$
    .pipe(
        ofType(feActions.UPDATE_FE),
        map((action: feActions.updateFEAction) => (action.payload)),
        switchMap((data:any) => this.fe.updateFEContent(data)
          .pipe(
            map(() => 
              (new feActions.updateFESuccessAction(data))
            ),
            catchError(() => EMPTY)
          ))
    ) 

    @Effect() processFE$ = this.actions$
    .pipe(
        ofType(feActions.PROCESS_FE),
        map((action: feActions.processFEAction) => (action.payload)),
        switchMap((data:any) => this.fe.processFEContent(data)
          .pipe(
            map(() => 
              (new feActions.processFESuccessAction(data))
            ),
            catchError(() => EMPTY)
          ))
    ) 

}