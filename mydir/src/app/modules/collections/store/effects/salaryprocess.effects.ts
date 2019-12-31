import { Injectable } from '@angular/core';
import { SalaryprocessService } from 'src/app/modules/collections/services/salaryprocess/salaryprocess.service';
import { Effect,Actions,ofType } from '@ngrx/effects';

import * as actions from "../actions/salaryprocess.action";
import { map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class spEffects  {
    constructor(
        private service: SalaryprocessService,
        private actions$: Actions
    ){}

   

    @Effect() loadSR$ = this.actions$
    .pipe(
        ofType(actions.LOAD_SP),
        switchMap((action: actions.loadSPAction) => this.service.getsalaryProcess(action.payload)
          .pipe(
            map(data => (new actions.loadSPSuccessAction(data))),
            catchError(() => EMPTY)
          ))
    )
     

    
}