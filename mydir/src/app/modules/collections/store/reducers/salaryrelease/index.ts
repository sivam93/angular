import { createSelector } from "@ngrx/store";
import * as fromReducers from "./salaryrelease.reducer";
import { productState,getProductsState } from "../../reducers";



export const getSRState = createSelector(
    getProductsState, 
    (state: productState) => state.sr
);

export const getSREntities = createSelector(
    getSRState,
    fromReducers.getSREntities
)


export const getAllSR = createSelector(
    getSREntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
)
export const getSRLoading = createSelector(
    getSRState,
    fromReducers.getSRLoading
)
export const getSRLoaded = createSelector(
    getSRState,
    fromReducers.getSRLoaded
)
