import { ActionReducerMap,createFeatureSelector } from "@ngrx/store";
import * as fromUntaggedReducers from "./untagged/untagged.reducer";
import * as fromFEReducers from "./financialexceptions/financialexceptions.reducer";
import * as fromMPMReducers from "./mpm/mpm.reducer";
import * as fromSRReducers from "./salaryrelease/salaryrelease.reducer";
import * as fromSPReducers from "./salaryprocess/salaryprocess.reducer";
import * as fromDashboardReducers from "./dashboard/dashboard.reducer";


export interface productState{
    untagged: fromUntaggedReducers.untaggedState,
    mpm:fromMPMReducers.MPMState,
    fe: fromFEReducers.financialState,
    sr:fromSRReducers.srState,
    sp:fromSPReducers.spState,
    dashboard: fromDashboardReducers.dashboardState
}

export const reducers: ActionReducerMap<productState> = {
    untagged : fromUntaggedReducers.untaggedReducer,
    mpm:fromMPMReducers.MPMreducer,
    fe : fromFEReducers.feReducer,
    sr : fromSRReducers.srReducer,
    sp:fromSPReducers.spReducer,
    dashboard: fromDashboardReducers.dashboardReducer
}

export const getProductsState = createFeatureSelector<productState>(
    "products"
);


