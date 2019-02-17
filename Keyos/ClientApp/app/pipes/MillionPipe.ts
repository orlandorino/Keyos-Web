import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'million'
})
export class MillionPipe extends DecimalPipe {
  transform(value: number): any {
    return super.transform(((value || 0)/ 1000000), "1.2-2");  
  }
}