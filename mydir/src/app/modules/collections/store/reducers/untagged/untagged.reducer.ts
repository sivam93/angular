import * as untaggedAction from "../../actions/untagged.action";
import { UNTAGGED } from 'src/app/models/untagged';

export interface untaggedState{
    // entities :{ [id: number] : UNTAGGED};
    entities:UNTAGGED[]
    loading:boolean;
    loaded:boolean;
    modalLoaded:boolean
}

export const initialState: untaggedState = {
    // entities:{},
    entities:[],
    loading: false,
    loaded:false,
    modalLoaded:false,
}

export function untaggedReducer(state = initialState,action:untaggedAction.Action):untaggedState{
    switch(action.type){
        case untaggedAction.LOAD_UNTAGGED:{
            return {
                ...state,
                loading:true
            }
        }
        case untaggedAction.LOAD_UNTAGGED_SUCCESS:{
            const entities = action.payload;
             return {
                ...state, 
                loading:false,
                loaded:true,
                entities
             }
        }
        case untaggedAction.DELETE_UNTAGGED:{
            return {
                ...state, 
                loaded:true,
             }
        }
        case untaggedAction.DELETE_UNTAGGED_SUCCESS:{
            const entities = state.entities.filter((untagged) => untagged.invoice_no !== action.payload.invoice_no);
           
            return {
                ...state, 
                loaded:true,
                modalLoaded:true,
                entities
             }
        }
        default:{
            return state
        }
    }
}

export const getUntaggedEntities = (state: untaggedState) => state.entities;
export const getUntaggedLoading = (state: untaggedState) => state.loading;
export const getUntaggedLoaded = (state: untaggedState) => state.loaded;
export const getUntaggedModalLoaded = (state: untaggedState) => state.modalLoaded;
