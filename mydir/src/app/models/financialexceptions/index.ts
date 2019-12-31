export interface FE{
        FinException:string;
        exceptions:any[];
        client_id: string;
        client_name: string;
        inm_id: number;
        invoice_amount: number;
        invoice_type: string;
        invoice_date: string;
        modeof_payment:string;
        payment_amount: number;
        adjusted_amount: number;
        tds:number;
        utr_number:string;
        payment_date:string;
        balance:number;
        total_amount:number;
}