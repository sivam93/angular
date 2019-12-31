import { SALARYPROCESS } from 'src/app/models/salaryprocess';
import { pdccycle } from "src/app/models/pdc"; 

export const LOAD_SP = "LOAD_SP";
export const LOAD_SP_SUCCESS = "LOAD_SP_SUCCESS";


export class loadSPAction {
    readonly type = LOAD_SP;
    constructor(public payload: pdccycle){}
}

export class loadSPSuccessAction {
    readonly type = LOAD_SP_SUCCESS;
    constructor(public payload: SALARYPROCESS[]){}
}



export type Action = 
      loadSPAction 
    | loadSPSuccessAction