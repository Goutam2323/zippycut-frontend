import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: false, name: 'price' })
export class PricePipe implements PipeTransform {
  transform(value: number): string {
    return `₹${value.toFixed(2)}`;
  }
}
