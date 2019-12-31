export interface MOSTPROBABLEMATCH{
    client_id: string;
    client_name: string;
    invoice_no: number;
    invoice_amount: number;
    invoice_type:string;
    invoice_date: string;
    payment_amount: number;
    payment_type: string;
    amount_recieved: number;
    adjusted_amount: number;
    tds:number;
    utr_number:string;
    payment_date:string;
    payment_time:string;
    modeof_payment:string;
    balance:number;
    total_amount:number;
}