import * as dashboardActions from '../../actions/dashboard.action';
import { DASHBOARD } from 'src/app/models/dashboard';


export interface dashboardState {
    entities:DASHBOARD;
    loading:boolean;
    loaded:boolean;
}

export const initialState: dashboardState = {
    entities:{
        totalinvoices:{
            totalinvoicescount: 0,
            untaggedinvoices:0,
            invoicenottagged: 0,
            salaryprocessed: 0,
            salarytobereleased: 0,
            financeexceptions: 0,
            mostprobable:0
        },
        collectionamount :{
            totalamount: 0,
            recievedamount: 0,
            outstandingamount: 0
        },
        clientcounts : {
            totalassociates: 0,
            totalclients:0,
            locked_client:0
        } 
    },
    loading: false,
    loaded:false
}

export function dashboardReducer(state = initialState,action:dashboardActions.Action):dashboardState{
    switch(action.type){
        case dashboardActions.LOAD_DASHBOARD:{
            return {
                ...state,
                loading:true,
                loaded:false
            }
        }
        case dashboardActions.LOAD_DASHBOARD_SUCCESS:{
            const payload = action.payload[0];
            const totalinvoices = {
                totalinvoicescount: payload.totalinvoice,
                invoicenottagged: Number(payload.invoicenottagged) + Number(payload.Mostprobable),
                untaggedinvoices: payload.invoicenottagged,
                salaryprocessed: payload.salaryprocessed,
                salarytobereleased: payload.salarytobereleased,
                financeexceptions: payload.financeexceptions,
                mostprobable : payload.Mostprobable
            };
            const collectionamount = {
                totalamount: payload.totalamount,
                recievedamount: payload.receivedamount,
                outstandingamount: payload.balance
            }; 
            let clients = JSON.parse(payload.clientcounts)
            const clientcounts = {
                totalassociates: clients[0].totalassociates,
                totalclients:clients[0].totalclients,
                locked_client:clients[0].locked_client
            }
            const entities = {
                totalinvoices,
                collectionamount,
                clientcounts
            }
             return {
                ...state, 
                loading:false,
                loaded:true,
                entities
             }
        }
        case dashboardActions.LOAD_DASHBOARD_UNTAGGED:{
            const oldtotalinvoices = {
                ...state.entities.totalinvoices
            };
            const newtotalinvoices = {
                invoicenottagged: state.entities.totalinvoices.invoicenottagged - 1,
                untaggedinvoices: state.entities.totalinvoices.untaggedinvoices - 1
            }
            const totalinvoices = Object.assign(oldtotalinvoices,newtotalinvoices);
            const entities = {
                totalinvoices,
                collectionamount : state.entities.collectionamount,
                clientcounts :  state.entities.clientcounts
            }
            return {
                ...state,
                entities
             }
        }
        case dashboardActions.LOAD_DASHBOARD_MPM:{
            const oldtotalinvoices = {
                ...state.entities.totalinvoices
            };
            const newtotalinvoices = {
                mostprobable: state.entities.totalinvoices.mostprobable - 1,
            }
            const totalinvoices = Object.assign(oldtotalinvoices,newtotalinvoices);
            const entities = {
                totalinvoices,
                collectionamount : state.entities.collectionamount,
                clientcounts :  state.entities.clientcounts
            }
            return {
                ...state,
                entities
             }
        }
        default:{
            return state
        }
    }
}

export const getDASHBOARDEntities = (state: dashboardState) => state.entities;
export const getDASHBOARDLoading = (state: dashboardState) => state.loading;
export const getDASHBOARDLoaded = (state: dashboardState) => state.loaded;