import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportFunctionsService {

  constructor() { }

  getAmount(deduction: string, selectedDeductions: any[]): number {
    let d = 0;
    selectedDeductions.forEach(response => {
      if (response.name == deduction)
        d = response.amount;
    });
    return d;
  }

  calculateTotalDeduction(payee:number, selectedDeductions: any[]) {
    let _total = 0;
    selectedDeductions.forEach(response => {
      _total += response.amount;
    });
    _total += payee;
    return _total;
  }

  calculateTotalIncome(basicSalary: number, selectedAllowances: any[]) {
    let _total = 0;
    selectedAllowances.forEach(response => {
      _total += response.amount;
    });
    _total += basicSalary;
    return _total;
  }

  getNetAmount(arr1: any[], arr2: any[]) {
    let _sum = 0;
    // Sum of big array
    arr1.forEach(data => {
      _sum += data;
    });
    // Decrement small array
    arr2.forEach(data => {
      _sum -= data;
    });
    return _sum;
  }

  getSum(arr: any[], hasObject?: boolean, optValue?: number): number {
    let _sum = 0;
    arr.forEach(data => {
      _sum += hasObject ? Number(data.amount) : Number(data);
    });
    if (optValue)
      _sum += Number(optValue);
    return _sum;
  }
}
