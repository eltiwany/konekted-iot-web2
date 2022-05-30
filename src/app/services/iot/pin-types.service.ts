import { HttpHrmService } from '../http/http-hrm.service';
import { ApiService } from '../../common/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PinTypesService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get pinTypes for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getPinTypes(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.pinTypes.getPinTypes, dataTablesParameters, false);
  }

  /**
   * Get pinTypes from API
   * @param void
   * @returns Promise<any>
   */
   async getPinTypesUnfiltered(): Promise<any> {
    return await this.http.get(this.api.pinTypes.pinTypes, false);
  }

  /**
   * New board from API
   * @param void
   * @returns Promise<any>
   */
   async newPinType(data: any): Promise<any> {
    return await this.http.post(this.api.pinTypes.pinTypes, data, true);
  }

  /**
   * Update board from API
   * @param void
   * @returns Promise<any>
   */
   async updatePinType(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.pinTypes.pinTypes, id, data, true);
  }

  /**
   * Delete board from API
   * @param void
   * @returns Promise<any>
   */
   async deletePinType(id:string): Promise<any> {
    return await this.http.delete(this.api.pinTypes.pinTypes, id, true);
  }

}
