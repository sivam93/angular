import { createSelector } from "@ngrx/store";
import * as fromReducers from "./untagged.reducer";
import { productState,getProductsState } from "../../reducers";



export const getUntaggedState = createSelector(
    getProductsState, 
    (state: productState) => state.untagged
);

export const getUntaggedEntities = createSelector(
    getUntaggedState,
    fromReducers.getUntaggedEntities
)


export const getAllUntagged = createSelector(
    getUntaggedEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
)
export const getUntaggedLoading = createSelector(
    getUntaggedState,
    fromReducers.getUntaggedLoading
)
export const getUntaggedLoaded = createSelector(
    getUntaggedState,
    fromReducers.getUntaggedLoaded
)
export const getUntaggedModalLoaded = createSelector(
    getUntaggedState,
    fromReducers.getUntaggedModalLoaded
)