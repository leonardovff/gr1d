import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: object = null;
  user: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    private http: HttpClient
  ) {
    let user = this.getUserFromStorage();
    if(user){
      this.setUser(user, false);
    }
  }
  private getUserFromStorage(){
    let data = localStorage.getItem('user');
    if(!data) return null;
    data = JSON.parse(data);
    return this.user;
  }
  private setUser(user: object, toPersist: boolean = true){
    this.currentUser = user;
    this.user.next(user);
    if(toPersist){
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
  login(data: object): Promise<any> { 
    return new Promise((resolve, reject) => {
      this.http
      .post(environment.api + 'auth', data).subscribe(res => {
        resolve();
      }, error => {
        reject();
      });
    });
  }
  getToken(){
    if(this.currentUser){
      return this.currentUser['token'];
    }
    return null;
  }
}
