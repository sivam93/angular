import { createSelector } from "@ngrx/store";
import * as fromReducers from "./financialexceptions.reducer";
import { productState,getProductsState } from "../../reducers";



export const getFEState = createSelector(
    getProductsState, 
    (state: productState) => state.fe
);

export const getFEEntities = createSelector(
    getFEState,
    fromReducers.getFEEntities
)


export const getAllFE= createSelector(
    getFEEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
)
export const getFELoading = createSelector(
    getFEState,
    fromReducers.getFELoading
)
export const getFELoaded = createSelector(
    getFEState,
    fromReducers.getFELoaded
)