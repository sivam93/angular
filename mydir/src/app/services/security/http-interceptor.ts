import { Injectable,NgModule } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var token =localStorage.getItem("token");
        if(token)
        {
            const newreq = req.clone({
                headers: req.headers.set('Authorization',
                    'Bearer '+token.replace(/['"]+/g, ''))
            });
            return next.handle(newreq).pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                    }
                    else  {
                    }
                    return event;
                }));
        }
        else 
        {
            return next.handle(req);
        }
    }
}

@NgModule({
    providers:[
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true
        }
    ]
})

export class HttpInterceptorModule{}