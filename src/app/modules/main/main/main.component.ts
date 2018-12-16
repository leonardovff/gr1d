import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {

  isMobile: MediaQueryList;
  private _mobileQueryListener: () => void;

  menu = [{
    'title': 'Clientes',
    'icon': 'account_circle',
    'router': 'users'
  },{
    'title': 'Sair',
    'icon': 'exit_to_app',
    'router': './'
  }]
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.isMobile = media.matchMedia('(max-width: 62em)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.isMobile.addListener(this._mobileQueryListener);
  }

  ngOnDestroy() {
    this.isMobile.removeListener(this._mobileQueryListener);
  }

}
