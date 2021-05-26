import { Pipe, PipeTransform } from '@angular/core';
/**
 * pipe function for chartID
 */
@Pipe({
  name: 'chartId'
})

/**
 * Class chart id pipe
 */
export class ChartIdPipe implements PipeTransform {

  transform(dict: string) {
    return dict.split('/tool/')[1];
  }

}
