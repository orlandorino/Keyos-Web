import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'billion'
})
export class BillionPipe extends DecimalPipe {

  transform(value: any, args?: any): any {
    return super.transform(((value || 0)/ 1000000000), "1.2-2");
  }

}
