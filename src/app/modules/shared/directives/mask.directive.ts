import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {
  
  @HostListener('input') onInput ($event: any) {
    this.mask();
  }
  mask(){
    var newVal = this.model.value.replace(/\D/g, '');
    if (newVal.length == 0) {
      newVal = '';
    } 
    else if (newVal.length <= 1) {
      newVal = newVal.replace(/^(\d{0,2})/, '($1');
    }
    else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,2})(.*)/, '($1) $2');
    } else if (newVal.length <= 10) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,4})(.*)/, '($1) $2 - $3');
    } else {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})/, '($1) $2 - $3');
    }
    // set the new value
    this.model.valueAccessor.writeValue(newVal);
  }
  constructor(private model: NgControl) { 
  }
}
