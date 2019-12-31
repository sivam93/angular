import { SALARYRELEASE } from 'src/app/models/salaryrelease';
import { pdccycle } from "src/app/models/pdc"; 

export const LOAD_STBR = "LOAD_STBR";
export const LOAD_STBR_SUCCESS = "LOAD_STBR_SUCCESS";


export class loadSTBRAction {
    readonly type = LOAD_STBR;
    constructor(public payload: pdccycle){}
}

export class loadSTBRSuccessAction {
    readonly type = LOAD_STBR_SUCCESS;
    constructor(public payload: SALARYRELEASE[]){}
}



export type Action = 
      loadSTBRAction 
    | loadSTBRSuccessAction