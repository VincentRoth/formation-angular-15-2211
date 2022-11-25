import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: string, separator = ' '): string {
    if (typeof value !== 'string' || typeof separator !== 'string') {
      return value;
    }
    return value.replace(/\./g, separator);
  }
}
