import { Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'shortDescription'})
export class ShortDescription implements PipeTransform {
  transform(text:string, truncateAt: number):string {
    if(text.length > truncateAt) {
      return text.substr(0, truncateAt) + '...';
    }

    return text;
  }
}
