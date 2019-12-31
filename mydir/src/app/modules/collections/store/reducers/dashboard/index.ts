import { createSelector } from "@ngrx/store";
import * as fromReducers from "./dashboard.reducer";
import { productState,getProductsState } from "../../reducers";

export const getDASHBOARDState = createSelector(
    getProductsState, 
    (state: productState) => state.dashboard
);

export const getDASHBOARDEntities = createSelector(
    getDASHBOARDState,
    fromReducers.getDASHBOARDEntities
)


export const getAllDASHBOARD= createSelector(
    getDASHBOARDEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
)
export const getDASHBOARDLoading = createSelector(
    getDASHBOARDState,
    fromReducers.getDASHBOARDLoading
)
export const getDASHBOARDLoaded = createSelector(
    getDASHBOARDState,
    fromReducers.getDASHBOARDLoaded
)