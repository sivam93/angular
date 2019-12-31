import { createSelector } from "@ngrx/store";
import * as fromReducers from "./salaryprocess.reducer";
import { productState,getProductsState } from "../../reducers";



export const getSPState = createSelector(
    getProductsState, 
    (state: productState) => state.sp
);

export const getSPEntities = createSelector(
    getSPState,
    fromReducers.getspEntities
)


export const getAllSP = createSelector(
    getSPEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
)
export const getSPLoading = createSelector(
    getSPState,
    fromReducers.getspLoading
)
export const getSPLoaded = createSelector(
    getSPState,
    fromReducers.getspLoaded
)
