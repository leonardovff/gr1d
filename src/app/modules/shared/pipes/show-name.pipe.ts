import { Pipe, PipeTransform } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Pipe({
  name: 'showName'
})
export class ShowNamePipe implements PipeTransform {

  transform(name: any, args?: any): any {
    if (!name) return null;
    let temp = "";
    name = name.split(' ');
    temp = name[0];
    if(name[1]){
      temp += ' ' + name[1];
    }
    return temp; 
  }
}
