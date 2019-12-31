import { FE } from 'src/app/models/financialexceptions';
import { pdccycle } from "src/app/models/pdc"; 

export const LOAD_FE = "LOAD_FE";
export const LOAD_FE_SUCCESS = "LOAD_FE_SUCCESS";
export const DELETE_FE = "DELETE_FE";
export const DELETE_FE_SUCCESS = "DELETE_FE_SUCCESS";
export const UPDATE_FE = "UPDATE_FE";
export const UPDATE_FE_SUCCESS = "UPDATE_FE_SUCCESS";
export const PROCESS_FE = "PROCESS_FE";
export const PROCESS_FE_SUCCESS = "PROCESS_FE_SUCCESS";


export class loadFEAction {
    readonly type = LOAD_FE;
    constructor(public payload: pdccycle){}
}

export class loadFESuccessAction {
    readonly type = LOAD_FE_SUCCESS;
    constructor(public payload: FE[]){}
}

export class deleteFEAction {
    readonly type = DELETE_FE;
    constructor(public payload:number){}
}

export class deleteFESuccessAction {
    readonly type = DELETE_FE_SUCCESS;
    constructor(public payload: number){}
}


export class updateFEAction {
    readonly type = UPDATE_FE;
    constructor(public payload:any){}
}

export class updateFESuccessAction {
    readonly type = UPDATE_FE_SUCCESS;
    constructor(public payload: any){}
}

export class processFEAction {
    readonly type = PROCESS_FE;
    constructor(public payload:any){}
}

export class processFESuccessAction {
    readonly type = PROCESS_FE_SUCCESS;
    constructor(public payload: any){}
}

export type Action = 
      loadFEAction 
    | loadFESuccessAction
    | deleteFEAction
    | deleteFESuccessAction
    | updateFEAction
    | updateFESuccessAction
    | processFEAction
    | processFESuccessAction;