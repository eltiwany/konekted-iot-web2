import { ApiService } from './../../common/services/api/api.service';
import { HttpHrmService } from './../http/http-hrm.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryAdService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  // -------------------- A L L O W A N C E S -------------------- //

  /**
   * Get allowances for datatable from API
   * @param void
   * @returns Promise<any>
   */
   async getAllowances(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.salaryAD.getAllowances, dataTablesParameters, false);
  }

  /**
   * Get allowances from API
   * @param void
   * @returns Promise<any>
   */
   async getAllowancesUnfiltered(): Promise<any> {
    return await this.http.get(this.api.salaryAD.allowances, false);
  }

  /**
   * New allowance from API
   * @param void
   * @returns Promise<any>
   */
   async newAllowance(data: any): Promise<any> {
    return await this.http.post(this.api.salaryAD.allowances, data, true);
  }

  /**
   * Update allowance from API
   * @param void
   * @returns Promise<any>
   */
   async updateAllowance(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.salaryAD.allowances, id, data, true);
  }

  /**
   * Delete allowance from API
   * @param void
   * @returns Promise<any>
   */
   async deleteAllowance(id:string): Promise<any> {
    return await this.http.delete(this.api.salaryAD.allowances, id, true);
  }


  // -------------------- D E D U C T I O N S -------------------- //


  /**
   * Get deductions for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getDeductions(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.salaryAD.getDeductions, dataTablesParameters, false);
  }

  /**
   * Get deductions from API
   * @param void
   * @returns Promise<any>
   */
  async getDeductionsUnfiltered(): Promise<any> {
    return await this.http.get(this.api.salaryAD.deductions, false);
  }

  /**
   * New deduction from API
   * @param void
   * @returns Promise<any>
   */
  async newDeduction(data: any): Promise<any> {
    return await this.http.post(this.api.salaryAD.deductions, data, true);
  }

  /**
   * Update deduction from API
   * @param void
   * @returns Promise<any>
   */
  async updateDeduction(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.salaryAD.deductions, id, data, true);
  }

  /**
   * Delete deduction from API
   * @param void
   * @returns Promise<any>
   */
  async deleteDeduction(id:string): Promise<any> {
    return await this.http.delete(this.api.salaryAD.deductions, id, true);
  }

  // -------------------- I N C O M E  T A X E S -------------------- //


  /**
   * Get incomeTaxes for datatable from API
   * @param void
   * @returns Promise<any>
   */
   async getIncomeTaxes(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.salaryAD.getIncomeTaxes, dataTablesParameters, false);
  }

  /**
   * Get incomeTaxes from API
   * @param void
   * @returns Promise<any>
   */
  async getIncomeTaxesUnfiltered(): Promise<any> {
    return await this.http.get(this.api.salaryAD.incomeTaxes, false);
  }

  /**
   * New deduction from API
   * @param void
   * @returns Promise<any>
   */
  async newIncomeTax(data: any): Promise<any> {
    return await this.http.post(this.api.salaryAD.incomeTaxes, data, true);
  }

  /**
   * Update deduction from API
   * @param void
   * @returns Promise<any>
   */
  async updateIncomeTax(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.salaryAD.incomeTaxes, id, data, true);
  }

  /**
   * Delete deduction from API
   * @param void
   * @returns Promise<any>
   */
  async deleteIncomeTax(id:string): Promise<any> {
    return await this.http.delete(this.api.salaryAD.incomeTaxes, id, true);
  }
}
