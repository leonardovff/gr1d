import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedbackErrorInput'
})
export class FeedbackErrorInputPipe implements PipeTransform {

  transform(errors: any, args?: any): any {
    if (!errors) return null;
    let hash = {
      email: "O email fornecido é inválido",
      required: "O campo é obrigatório",
    }
    return hash[Object.keys(errors)[0]];
  }

}
