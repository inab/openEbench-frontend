import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe for Badges
 */
@Pipe({
  name: 'sourceBadgeClass'
})

/**
 * Class for SourceBadgeClass pipe
 */
export class SourceBadgeClassPipe implements PipeTransform {

  transform(dist: string): any {
    console.log(dist);
  }

}
