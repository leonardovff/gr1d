import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { Users } from './users-data';

@Injectable()
class FakeBackendInterceptor implements HttpInterceptor {
 
    constructor() { }
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
        if(!users.length){
            users = Users;
            localStorage.setItem('users', JSON.stringify(users));
        }
        
        return of(null).pipe(mergeMap(() => {

            // login
            if(request.url.endsWith('/auth') && request.method == 'POST'){
                let userAuthenticate = users.filter(user => {
                    return user.email === request.body.email && user.password === request.body.password;
                });
                // check password and email
                if (userAuthenticate.length) {
                    // add bear fake token 
                    userAuthenticate[0]['token'] = 'fake_bearer_token';
                    return of(new HttpResponse({ 
                        status: 200, 
                        body: userAuthenticate[0] 
                    }));
                } else {
                    return throwError({ error: { 
                        message: 'Username or password is incorrect'
                    }});
                }
            }
 
            // get list of users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, 
                // this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake_bearer_token') {
                    users.sort((a, b) => {
                        let lca = a.name.toLowerCase(), lcb = b.name.toLowerCase();
                        return lca > lcb ? 1 : lca < lcb ? -1 : 0;
                    });
                    return of(new HttpResponse({ status: 200, body: [...users] }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }
 
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake_bearer_token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedUsers = users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;
 
                    return of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }
 
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'POST') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake_bearer_token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let flag = false;
                    users = users.map(user => { 
                        if(user.id == id){
                            flag = true;
                            return {
                                id: id,
                                name: request.body.name,
                                email: request.body.email,
                                password: request.body.password,
                                phone: request.body.phone
                            }
                        }
                        return user; 
                    });
                    if(!flag){
                        return throwError({ error: { message: 'Not found' } });
                    }
                    // save new user
                    localStorage.setItem('users', JSON.stringify(users));

                    return of(new HttpResponse({ status: 200, body: {message: "Success"} }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }
 
            // register user
            if (request.url.endsWith('/users') && request.method === 'POST') {
                // get new user object from post body
                
                let newUser = request.body;
                users = users.sort((a,b) => b.id - a.id);
                newUser.id = users[0].id + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
 
                // respond 200 OK
                return of(new HttpResponse({ status: 200, body: {id: newUser.id }}));
            }
 
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake_bearer_token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    users = users.filter(u => u.id != id)
                    localStorage.setItem('users', JSON.stringify(users));
 
                    // respond 200 OK
                    return of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }
 
            // pass through any requests not handled above
            return next.handle(request);
             
        }))
 
        .pipe(materialize())
        .pipe(delay(1000))
        .pipe(dematerialize());
    }
}
 
export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};