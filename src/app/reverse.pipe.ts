import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(array:[]) {
    var copy=array.slice();
    return copy.reverse();
  }

}
