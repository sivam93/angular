import { UNTAGGED } from 'src/app/models/untagged';
import { pdccycle } from "src/app/models/pdc"; 

export const LOAD_UNTAGGED = "LOAD_UNTAGGED";
export const LOAD_UNTAGGED_SUCCESS = "LOAD_UNTAGGED_SUCCESS";
export const DELETE_UNTAGGED = "DELETE_UNTAGGED";
export const DELETE_UNTAGGED_SUCCESS = "DELETE_UNTAGGED_SUCCESS";


export class loadUntaggedAction {
    readonly type = LOAD_UNTAGGED;
    constructor(public payload: pdccycle){}
}

export class loadUntaggedSuccessAction {
    readonly type = LOAD_UNTAGGED_SUCCESS;
    constructor(public payload: UNTAGGED[]){}
}

export class deleteUntaggedAction {
    readonly type = DELETE_UNTAGGED;
    constructor(public payload:any){}
}

export class deleteUntaggedSuccessAction {
    readonly type = DELETE_UNTAGGED_SUCCESS;
    constructor(public payload: any){}
}

export type Action = 
      loadUntaggedAction 
    | loadUntaggedSuccessAction
    | deleteUntaggedAction
    | deleteUntaggedSuccessAction;