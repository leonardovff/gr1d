import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {
  @HostListener('keyup', ['$event']) 
  onKeyup($event: any) {
    // código aqui...
  }
 
  @HostListener('blur', ['$event']) 
  onBlur($event: any) {
   // código aqui
  }
  constructor() { }

  phoneValidate(){
  }
}
