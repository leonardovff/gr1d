import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';

import { AuthService } from './../services/auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {}
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const tokenApi = this.auth.getToken();
        req = req.clone({
            url: environment.api + req.url
        });
        if(tokenApi){
            req = req.clone({setHeaders: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': "Bearer " + tokenApi
            }});
        }
        return next.handle(req);
    }
    
}