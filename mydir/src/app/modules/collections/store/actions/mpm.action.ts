import { MOSTPROBABLEMATCH } from 'src/app/models/mostprobablematch';
import { pdccycle } from "src/app/models/pdc"; 

export const LOAD_MPM = "LOAD_MPM";
export const LOAD_MPM_SUCCESS = "LOAD_MPM_SUCCESS";
export const DELETE_MPM = "DELETE_MPM";
export const DELETE_MPM_SUCCESS = "DELETE_MPM_SUCCESS";

export class loadMPMAction {
    readonly type = LOAD_MPM;
    constructor(public payload: pdccycle){}
}

export class loadMPMSuccessAction {
    readonly type = LOAD_MPM_SUCCESS;
    constructor(public payload: MOSTPROBABLEMATCH[]){}
}

export class deleteMPMAction {
    readonly type = DELETE_MPM;
    constructor(public payload:any){}
}

export class deleteMPMSuccessAction {
    readonly type = DELETE_MPM_SUCCESS;
    constructor(public payload: any){}
}

export type Action = 
      loadMPMAction 
    | loadMPMSuccessAction
    | deleteMPMAction
    | deleteMPMSuccessAction;