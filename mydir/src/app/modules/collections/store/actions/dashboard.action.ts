import { TOTALINVOICES } from 'src/app/models/dashboard/totalinvoices';

import { pdccycle } from "src/app/models/pdc"; 


export const LOAD_DASHBOARD = "LOAD_DASHBOARD";
export const LOAD_DASHBOARD_SUCCESS = "LOAD_DASHBOARD_SUCSESS";
export const LOAD_DASHBOARD_UNTAGGED = "LOAD_DASHBOARD_UNTAGGED";
export const LOAD_DASHBOARD_MPM = "LOAD_DASHBOARD_MPM";

export class loadDashboardAction {
    readonly type = LOAD_DASHBOARD;
    constructor(public payload: pdccycle){

    }
}
export class loadDashboardSuccessAction {
    readonly type = LOAD_DASHBOARD_SUCCESS;
    constructor(public payload: TOTALINVOICES ){

    }
}

export class loadDashboardUntaggedAction {
    readonly type = LOAD_DASHBOARD_UNTAGGED;
    constructor(){
        
    }
}
export class loadDashboardMPMAction {
    readonly type = LOAD_DASHBOARD_MPM;
    constructor(){
        
    }
}


export type Action = 
        loadDashboardAction 
     |  loadDashboardSuccessAction
     |  loadDashboardUntaggedAction
     |  loadDashboardMPMAction;