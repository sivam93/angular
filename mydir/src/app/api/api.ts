import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const baseUrl = {
    live: environment.apiURL,
}
const httpOptions = {
    headers: new HttpHeaders({ 
        
    }),
}

let apiUrl =  {
    apiUrl:baseUrl.live,
    login : baseUrl.live+'Login',
    consolidated:baseUrl.live+'consolidated/',
    untagged : baseUrl.live+'untaggedinvoice/getdata',
    untaggedpost : baseUrl.live+'untaggedinvoice/processdata',
    mostprobablematch : baseUrl.live+'mostprobablematch/getdata',
    mostprobablematchpost : baseUrl.live+'mostprobablematch/processdata',
    financialexceptions:baseUrl.live+'FinancialExceptions/GetFinException',
    financialexceptionsUpdate:baseUrl.live+'FinancialExceptions/FinUpdate',
    financialexceptionsProcess:baseUrl.live+'FinancialExceptions/FinProcess',
    salaryRelease: baseUrl.live+'Salary/getSalaryReleasedData',
    salaryProcess: baseUrl.live+'Salary/getSalaryProcessedData',
    totalinvoices:baseUrl.live+'opsanchordashboard/getinvoice',
    fileupload:baseUrl.live+'utility/uploadfile'
}

const roles = {
    "OpsAnchor":1,
    "OpsManager":2,
    "FinanceAnchor":21,
    "FinanceManager":4
}

const dateFormat = 'dd-MMM-yyyy';

export { 
    httpOptions,
    apiUrl,
    roles,
    dateFormat 
}
