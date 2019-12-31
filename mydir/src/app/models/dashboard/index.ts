import { TOTALINVOICES } from './totalinvoices';
import { COLLECTIONAMOUNT } from './collectionamount';
import { CLIENTCOUNTS } from './clientcounts';

export interface DASHBOARD{
    totalinvoices: TOTALINVOICES,
    collectionamount: COLLECTIONAMOUNT,
    clientcounts: CLIENTCOUNTS
}