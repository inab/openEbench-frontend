import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sourceBadgeClass'
})
export class SourceBadgeClassPipe implements PipeTransform {

  transform(dist: string): any {
    console.log(dist);
  }

}
