import { Injectable } from '@angular/core';
import { DashboardService } from 'src/app/modules/collections/services/dashboard/dashboard.service';
import { Effect,Actions,ofType } from '@ngrx/effects';

import * as dashboardActions from "../actions/dashboard.action";
import { map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class dashboardEffects {
    constructor(
        private dashboard: DashboardService,
        private actions$: Actions
    ){}

    @Effect() loadFE$ = this.actions$
    .pipe(
        ofType(dashboardActions.LOAD_DASHBOARD),
        switchMap((action : dashboardActions.loadDashboardAction) => this.dashboard.getData(action.payload)
          .pipe(
            map(data => (new dashboardActions.loadDashboardSuccessAction(data))),
            catchError(() => EMPTY)
          ))
    )

}