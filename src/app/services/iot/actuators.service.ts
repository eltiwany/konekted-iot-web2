import { HttpHrmService } from './../http/http-hrm.service';
import { ApiService } from './../../common/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActuatorsService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get actuators for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getActuators(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.actuators.getActuators, dataTablesParameters, false);
  }

  /**
   * Get actuators for datatable from API
   * @param void
   * @returns Promise<any>
   */
   async getUserActuators(): Promise<any> {
    return await this.http.get(this.api.actuators.userActuators, false);
  }


  /**
   * Get actuator pin types for datatable from API
   * @param void
   * @returns Promise<any>
   */
   async getActuatorPinTypes(): Promise<any> {
    return await this.http.post(this.api.actuators.getActuatorPinTypes, false);
  }

  /**
   * Get actuators from API
   * @param void
   * @returns Promise<any>
   */
   async getActuatorsUnfiltered(): Promise<any> {
    return await this.http.get(this.api.actuators.actuators, false);
  }

  /**
   * New actuator from API
   * @param void
   * @returns Promise<any>
   */
   async newActuator(data: any): Promise<any> {
    return await this.http.postFiles(this.api.actuators.actuators, data, true);
  }

  /**
   * Link actuator from API
   * @param void
   * @returns Promise<any>
   */
   async newUserActuator(data: any): Promise<any> {
    return await this.http.post(this.api.actuators.userActuators, data, true);
  }

  /**
   * Update actuator from API
   * @param void
   * @returns Promise<any>
   */
   async updateActuator(id:string, data: any): Promise<any> {
    return await this.http.postFiles(this.api.actuators.actuators, data, true);
  }

  /**
   * Switch actuator On/Off from API
   * @param void
   * @returns Promise<any>
   */
   async switchActuator(data: any): Promise<any> {
    return await this.http.post(this.api.actuators.switchActuator, data, false);
  }

  /**
   * Delete actuator from API
   * @param void
   * @returns Promise<any>
   */
   async deleteActuator(id:string): Promise<any> {
    return await this.http.delete(this.api.actuators.actuators, id, true);
  }

  /**
   * Unlink actuator from API
   * @param void
   * @returns Promise<any>
   */
   async deleteUserActuator(id:string): Promise<any> {
    return await this.http.delete(this.api.actuators.userActuators, id, true);
  }

}
