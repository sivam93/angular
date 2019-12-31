import * as srAction from "../../actions/salaryrelease.action";
import { SALARYRELEASE } from 'src/app/models/salaryrelease';

export interface srState{
    // entities :{ [id: number] : UNTAGGED};
    entities:SALARYRELEASE[]
    loading:boolean;
    loaded:boolean;
}

export const initialState: srState = {
    // entities:{},
    entities:[],
    loading: false,
    loaded:false
}

export function srReducer(state = initialState,action:srAction.Action):srState{
    switch(action.type){
        case srAction.LOAD_STBR:{
            return {
                ...state,
                loading:true
            }
        }
        case srAction.LOAD_STBR_SUCCESS:{
            const entities = action.payload;
             return {
                ...state, 
                loading:false,
                loaded:true,
                entities
             }
        }
        default:{
            return state
        }
    }
}

export const getSREntities = (state: srState) => state.entities;
export const getSRLoading = (state: srState) => state.loading;
export const getSRLoaded = (state: srState) => state.loaded;
