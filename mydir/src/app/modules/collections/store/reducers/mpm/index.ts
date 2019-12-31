import { createSelector } from "@ngrx/store";
import * as fromReducers from "./mpm.reducer";
import { productState,getProductsState } from "../../reducers";

export const getMPMState = createSelector(
    getProductsState, 
    (state: productState) => state.mpm
);

export const getMPMEntities = createSelector(
    getMPMState,
    fromReducers.getMPMentities
)

export const getAllMPM = createSelector(
    getMPMEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
)

export const getMPMLoading = createSelector(
    getMPMState,
    fromReducers.getMPMLoading
)
export const getMPMLoaded = createSelector(
    getMPMState,
    fromReducers.getMPMLoaded
)
export const getMPMModalLoaded = createSelector(
    getMPMState,
    fromReducers.getMPMModalLoaded
)