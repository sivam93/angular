import { Injectable } from '@angular/core';
import { UntaggedService } from 'src/app/modules/collections/services/untagged/untagged.service';
import { Effect,Actions,ofType } from '@ngrx/effects';

import * as untaggedActions from "../actions/untagged.action";
import { map, catchError, switchMap, mapTo, skipUntil } from 'rxjs/operators';
import { EMPTY, Observable,interval } from 'rxjs';

@Injectable()
export class untaggedEffects  {
    constructor(
        private untaggedService: UntaggedService,
        private actions$: Actions
    ){}

   

    @Effect() loadUntagged$ = this.actions$
    .pipe(
        ofType(untaggedActions.LOAD_UNTAGGED),
        switchMap((action: untaggedActions.loadUntaggedAction) => this.untaggedService.untagged(action.payload)
        .pipe(
            map(data => (new untaggedActions.loadUntaggedSuccessAction(data))),
            catchError(() => EMPTY)
        ))
    )

    @Effect() deleteUntagged$ = this.actions$
    .pipe(
        ofType(untaggedActions.DELETE_UNTAGGED),
        map((action: untaggedActions.deleteUntaggedAction) => (action.payload)),
        switchMap((data:any) => this.untaggedService.postUntaggedContent(data)
          .pipe(
            map(() => 
              (new untaggedActions.deleteUntaggedSuccessAction(data))
            ),
            catchError(() => EMPTY)
          ))
    )       

    
}

