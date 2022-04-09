import { AppConfigService } from './../common/services/app-config.service';
import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'currenyTz'
})

export class CurrenyTzPipe implements PipeTransform {

  transform(
    value: number,
    currencyCode: string = this.config.preferences.currency,
    display:
        | 'symbol'
        | 'code'
        | 'symbol-narrow'
        | string
        | boolean = 'symbol',
    digitsInfo: string = '3.2-2',
    locale: string = 'fr',
    ): string | null {
        return formatCurrency(
          value,
          locale,
          getCurrencySymbol(currencyCode, 'wide'),
          currencyCode,
          digitsInfo,
        );
    }

    constructor(
      private config: AppConfigService
    ) { }

}
