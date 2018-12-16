import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {

  isMobile: MediaQueryList;
  private _mobileQueryListener: () => void;
  user: any = null;
  menu = [{
    'title': 'Clientes',
    'icon': 'account_circle',
    'router': '/users'
  },{
    'title': 'Sair',
    'icon': 'exit_to_app',
    'router': '/logout'
  }]
  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    auth: AuthService
  ) {
    auth.user.subscribe(user => {
      this.user = user;
    });
    this.isMobile = media.matchMedia('(max-width: 62em)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.isMobile.addListener(this._mobileQueryListener);
    
  }
  ngOnDestroy() {
    this.isMobile.removeListener(this._mobileQueryListener);
  }

}
