import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  toogled: EventEmitter<any> = new EventEmitter();
  constructor() {
  }
}
