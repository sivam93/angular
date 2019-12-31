import * as MPMActions from "../../actions/mpm.action";
import { MOSTPROBABLEMATCH } from 'src/app/models/mostprobablematch';

export interface MPMState  {
    entities:MOSTPROBABLEMATCH[]
    loading:boolean;
    loaded:boolean;
    modalLoaded:boolean;
}

export const initialState: MPMState = {
    entities:[],
    loading: false,
    loaded:false,
    modalLoaded:false,
}


export function MPMreducer(state = initialState, action:MPMActions.Action):MPMState{
    switch(action.type){
        case MPMActions.LOAD_MPM:{
            return { 
                ...state,
                loading:true
            }
        }
        case MPMActions.LOAD_MPM_SUCCESS:{
            const entities = action.payload;
            return {
                ...state,
                loading:false,
                loaded:true,
                entities
            }
        }
        case MPMActions.DELETE_MPM:{
            return {
                ...state, 
                loaded:true,
             }
        }
        case MPMActions.DELETE_MPM_SUCCESS:{
  
              const entities = state.entities.filter((mpm) => mpm.invoice_no !== action.payload.invoice_no);
              
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


export const getMPMentities = (state:MPMState) => state.entities;
export const getMPMLoaded = (state:MPMState) => state.loaded;
export const getMPMLoading = (state:MPMState) => state.loading;
export const getMPMModalLoaded = (state: MPMState) => state.modalLoaded;