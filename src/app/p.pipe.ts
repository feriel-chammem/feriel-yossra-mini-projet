import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p'
})
export class PPipe implements PipeTransform {

  transform(prix:number):string {
    return prix+"  DT  "
  }

}
