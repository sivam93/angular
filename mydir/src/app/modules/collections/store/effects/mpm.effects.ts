import { Injectable } from '@angular/core';
import { MostprobablematchService } from 'src/app/modules/collections/services/mostprobablematch/mostprobablematch.service';
import { Effect,Actions,ofType } from '@ngrx/effects';

import * as MPMActions from "../actions/mpm.action";
import { map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class MPMEffects {
    constructor(
        private MPM_Service: MostprobablematchService,
        private actions$: Actions
    ){}

    @Effect() loadMPM$ = this.actions$
    .pipe(
        ofType(MPMActions.LOAD_MPM),
        switchMap((action: MPMActions.loadMPMAction) => this.MPM_Service.getMpm(action.payload)
          .pipe(
            map(data => (new MPMActions.loadMPMSuccessAction(data))),
            catchError(() => EMPTY)
          ))
    )
    @Effect() deleteMPM$ = this.actions$
    .pipe(
        ofType(MPMActions.DELETE_MPM),
        map((action: MPMActions.deleteMPMAction) => action.payload),
        switchMap((data:any) => this.MPM_Service.postMpm(data)
          .pipe(
            map(() => (new MPMActions.deleteMPMSuccessAction(data))),
            catchError(() => EMPTY)
          ))
    )

}