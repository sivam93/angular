import * as spAction from "../../actions/salaryprocess.action";
import { SALARYPROCESS } from 'src/app/models/salaryprocess';

export interface spState{
    // entities :{ [id: number] : UNTAGGED};
    entities:SALARYPROCESS[]
    loading:boolean;
    loaded:boolean;
}

export const initialState: spState = {
    // entities:{},
    entities:[],
    loading: false,
    loaded:false
}

export function spReducer(state = initialState,action:spAction.Action):spState{
    switch(action.type){
        case spAction.LOAD_SP:{
            return {
                ...state,
                loading:true
            }
        }
        case spAction.LOAD_SP_SUCCESS:{
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

export const getspEntities = (state: spState) => state.entities;
export const getspLoading = (state: spState) => state.loading;
export const getspLoaded = (state: spState) => state.loaded;
