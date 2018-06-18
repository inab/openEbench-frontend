import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chartId'
})
export class ChartIdPipe implements PipeTransform {

  transform(dict: string) {
    return dict.split('/tool/')[1];
  }

}
