import { ApiService } from './../../common/services/api/api.service';
import { HttpHrmService } from './../http/http-hrm.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get banks for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getBanks(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.banks.getBanks, dataTablesParameters, false);
  }

  /**
   * Get banks from API
   * @param void
   * @returns Promise<any>
   */
   async getBanksUnfiltered(): Promise<any> {
    return await this.http.get(this.api.banks.banks, false);
  }

  /**
   * New bank from API
   * @param void
   * @returns Promise<any>
   */
   async newBank(data: any): Promise<any> {
    return await this.http.post(this.api.banks.banks, data, true);
  }

  /**
   * Update bank from API
   * @param void
   * @returns Promise<any>
   */
   async updateBank(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.banks.banks, id, data, true);
  }

  /**
   * Delete bank from API
   * @param void
   * @returns Promise<any>
   */
   async deleteBank(id:string): Promise<any> {
    return await this.http.delete(this.api.banks.banks, id, true);
  }
}
