import * as feActions from "../../actions/financialexceptions.action";
import { FE } from 'src/app/models/financialexceptions';

export interface financialState{
    // entities :{ [id: number] : UNTAGGED};
    entities:FE[]
    loading:boolean;
    loaded:boolean;
}

export const initialState: financialState = {
    // entities:{},
    entities:[],
    loading: false,
    loaded:false
}

export function feReducer(state = initialState,action:feActions.Action):financialState{
    switch(action.type){
        case feActions.LOAD_FE:{
            return {
                ...state,
                loading:true
            }
        }
        case feActions.LOAD_FE_SUCCESS:{
            const data = action.payload;
            let entities = [];
            data.map((row) => {
               entities.push(JSON.parse(row.FinException));
            });
             return {
                ...state, 
                loading:false,
                loaded:true,
                entities
             }
        }
        case feActions.UPDATE_FE:{
            return {
                ...state, 
                loaded:true,
             }
        }
        case feActions.UPDATE_FE_SUCCESS:{
            
            return {
                ...state, 
                loaded:true,
             }
        }
        case feActions.PROCESS_FE:{
            
            return {
                ...state, 
                loaded:true,
             }
        }
        case feActions.PROCESS_FE_SUCCESS:{
            let entities;
            let exid = action.payload.exceptionid;
            let ent = state.entities;
            entities = calculate(ent,action.payload.inm_id,exid,ent);
            
            return {    
                ...state, 
                loaded:true,
                entities
             }
        }
        default:{
            return state
        }
    }
}

function calculate(data,id,exid,old)
{
    let  entities = [];
    data.forEach((da) => {
        if(da.exceptions.length > 1)
        {
            let exceptions = [];
            for(let ex=0;ex<da.exceptions.length;ex++)
            {
                if(da.exceptions[ex].exception_id !== exid)
                {
                    exceptions.push(da.exceptions[ex]);
                }
            }
            let newexc = {"exceptions":exceptions};
            for(let inv=0;inv<old.length;inv++)
            {
               let returnedTarget = Object.assign(old[inv],newexc);
               entities.push(returnedTarget);
            }
        }
        else {
          entities = data.filter((d) => d.inm_id != id);
        }
    })
   
    return entities;   
}

export const getFEEntities = (state: financialState) => state.entities;
export const getFELoading = (state: financialState) => state.loading;
export const getFELoaded = (state: financialState) => state.loaded;