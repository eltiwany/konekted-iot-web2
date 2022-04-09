import { HttpHrmService } from './../http/http-hrm.service';
import { ApiService } from './../../common/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get departments for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getDepartments(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.departments.getDepartments, dataTablesParameters, false);
  }

  /**
   * Get departments from API
   * @param void
   * @returns Promise<any>
   */
   async getDepartmentsUnfiltered(): Promise<any> {
    return await this.http.get(this.api.departments.departments, false);
  }

  /**
   * New department from API
   * @param void
   * @returns Promise<any>
   */
   async newDepartment(data: any): Promise<any> {
    return await this.http.post(this.api.departments.departments, data, true);
  }

  /**
   * Update department from API
   * @param void
   * @returns Promise<any>
   */
   async updateDepartment(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.departments.departments, id, data, true);
  }

  /**
   * Delete department from API
   * @param void
   * @returns Promise<any>
   */
   async deleteDepartment(id:string): Promise<any> {
    return await this.http.delete(this.api.departments.departments, id, true);
  }
}
