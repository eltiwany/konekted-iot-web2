import { HttpHrmService } from './../http/http-hrm.service';
import { ApiService } from './../../common/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get sensors for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getSensors(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.sensors.getSensors, dataTablesParameters, false);
  }

  /**
   * Get user sensors for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getUserSensors(): Promise<any> {
    return await this.http.get(this.api.sensors.userSensors, false);
  }

  /**
   * Get user sensors for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getUserSensorValues(): Promise<any> {
    return await this.http.get(this.api.sensors.userSensorValues, false);
  }


  /**
   * Get sensor pin types for datatable from API
   * @param void
   * @returns Promise<any>
   */
   async getSensorPinTypes(): Promise<any> {
    return await this.http.post(this.api.sensors.getSensorPinTypes, false);
  }

  /**
   * Get sensors from API
   * @param void
   * @returns Promise<any>
   */
   async getSensorsUnfiltered(): Promise<any> {
    return await this.http.get(this.api.sensors.sensors, false);
  }

  /**
   * New sensor from API
   * @param void
   * @returns Promise<any>
   */
   async newSensor(data: any): Promise<any> {
    return await this.http.postFiles(this.api.sensors.sensors, data, true);
  }

  /**
   * Link sensor to a user from API
   * @param void
   * @returns Promise<any>
   */
   async newUserSensor(data: any): Promise<any> {
    return await this.http.post(this.api.sensors.userSensors, data, true);
  }

  /**
   * Update sensor from API
   * @param void
   * @returns Promise<any>
   */
   async updateSensor(id:string, data: any): Promise<any> {
    return await this.http.postFiles(this.api.sensors.sensors, data, true);
  }

  /**
   * Delete sensor from API
   * @param void
   * @returns Promise<any>
   */
   async deleteSensor(id:string): Promise<any> {
    return await this.http.delete(this.api.sensors.sensors, id, true);
  }

  /**
   * Delete sensor from API
   * @param void
   * @returns Promise<any>
   */
   async deleteUserSensor(id:string): Promise<any> {
    return await this.http.delete(this.api.sensors.userSensors, id, true);
  }

}
