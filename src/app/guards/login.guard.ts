import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean
    {
      return new Promise((resolve) => {
        let sub = this.auth.user.subscribe(user => {
          if(sub) sub.unsubscribe();
          resolve(user ? false : true);
          if(user){
            this.router.navigate(['/']);
          }
        })
      })    
  }
}
