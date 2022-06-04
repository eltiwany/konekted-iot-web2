import { ApiService } from './../../common/services/api/api.service';
import { HttpHrmService } from './../http/http-hrm.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutomationsService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get automations for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getAutomations(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.automations.getAutomations, dataTablesParameters, false);
  }

  /**
   * Get automations from API
   * @param void
   * @returns Promise<any>
   */
   async getAutomationsUnfiltered(): Promise<any> {
    return await this.http.get(this.api.automations.automations, false);
  }

  /**
   * New board from API
   * @param void
   * @returns Promise<any>
   */
   async newAutomation(data: any): Promise<any> {
    return await this.http.post(this.api.automations.automations, data, true);
  }

  /**
   * Update board from API
   * @param void
   * @returns Promise<any>
   */
   async updateAutomation(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.automations.automations, id, data, true);
  }

  /**
   * Delete board from API
   * @param void
   * @returns Promise<any>
   */
   async deleteAutomation(id:string): Promise<any> {
    return await this.http.delete(this.api.automations.automations, id, true);
  }
}
