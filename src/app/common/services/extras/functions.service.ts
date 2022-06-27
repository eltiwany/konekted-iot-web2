import { AppConfigService } from './../app-config.service';
import { Injectable } from '@angular/core';
import * as ntw from 'number-to-words';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  characters: string ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  constructor(
    private config: AppConfigService
  ) {}

  /**
   * Convert string to lower camel case
   * @param sentense
   * @returns Sentense
   */
  toLowerCamelCase(sentense: string): string {
    return sentense.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '').replace('-', ' ').replace('_', ' ');
  }

  /**
   * Convert string to upper camel case
   * @param sentense
   * @returns Sentense
   */
   toUpperCamelCase(sentense: string): string {
    return sentense.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toUpperCase() : word.toUpperCase();
    }).replace(/\s+/g, '').replace(/-/g, ' ').replace(/_/g, ' ');
  }

  /**
   * Remove white space from sentenses
   *
   * @param sentense sentense
   * @returns sentenseWithoutWhiteSpace
   */
  removeWhiteSpace(sentense: string): string {
    return sentense.replace(' ', '');
  }

  /**
   * Convert number to words
   *
   * @param sentense sentense
   * @returns sentenseWithoutWhiteSpace
   */
   numberToWords(currency: number): string {
    return ntw.toWords(currency);
  }

  checkCapitalizedWord(word: string): boolean {
    const wordCapital = word.toUpperCase();
    switch (wordCapital) {
      case 'SMS':
        return true;
      default:
        return false;
    }
  }

  /**
   * Check if provided value is a number
   * @param data valueToCheck
   * @returns boolean
   */
  isNumeric(data: any) {
    if (typeof data != "number")
      return false // we only process numbers!
    return !isNaN(data as any) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(data as any)) // ...and ensure strings of whitespace fail
  }

  /**
   * Convert month in number to words
   *
   * @param month monthInNumbers
   * @returns monthInWord
   */
   monthToWords(month: number): string {
      let _month = "";
      this.config.monthsList.forEach((m) => {
        if (m.number == month) {
          _month = m.name;
          return;
        }
      });
      return _month;
  }

  generateString(length: number) {
      let result = ' ';
      const charactersLength = this.characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
  }

  comparisonToEnglish(short: string): string {
    switch (short) {
      case "E":
        return "Equal";
      case "NE":
        return "Not Equal";
      case "G":
        return "Greater Than";
      case "GE":
        return "Greater Than or Equal";
      case "L":
        return "Less Than";
      case "LE":
        return "Less Than or Equal";
      default:
        return "Invalid Comparison";
    }
  }

  getColumnNames(columns: any[]) {
    return columns.reduce((acc, curr, index) => acc + curr.name + (columns.length - 1 == index ? "" :", "), "")
  }

  getSIUnit(name: string): string {
    switch(name) {
      case "DIST":
        return "cm"
      case "LIGHT":
        return "cd"
      default:
        return ""
    }
  }
}
