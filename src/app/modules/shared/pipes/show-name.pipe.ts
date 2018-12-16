import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showName'
})
export class ShowNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
