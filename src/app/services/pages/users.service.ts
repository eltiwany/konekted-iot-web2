import { HttpHrmService } from './../http/http-hrm.service';
import { ApiService } from './../../common/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get users for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getUsers(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.users.getUsers, dataTablesParameters, false);
  }

  /**
   * Get user logs for datatable from API
   * @param void
   * @returns Promise<any>
   */
   async getUserLogs(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.users.getUserLogs, dataTablesParameters, false);
  }

  /**
   * Get users from API
   * @param void
   * @returns Promise<any>
   */
   async getUsersUnfiltered(): Promise<any> {
    return await this.http.get(this.api.users.users, false);
  }

  /**
   * New user from API
   * @param void
   * @returns Promise<any>
   */
   async newUser(data: any): Promise<any> {
    return await this.http.post(this.api.users.users, data, true);
  }

  /**
   * Update user from API
   * @param void
   * @returns Promise<any>
   */
   async updateUser(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.users.users, id, data, true);
  }

  /**
   * Delete user from API
   * @param void
   * @returns Promise<any>
   */
   async deleteUser(id:string): Promise<any> {
    return await this.http.delete(this.api.users.users, id, true);
  }

  /**
   * Reset password from API
   * @param void
   * @returns Promise<any>
   */
   async resetPassword(data: any): Promise<any> {
    return await this.http.post(this.api.users.resetPassword, data, true);
  }

  /**
   * Clear user logs from API
   * @param void
   * @returns Promise<any>
   */
   async clearUserLogs(data: any): Promise<any> {
    return await this.http.post(this.api.users.clearUserLogs, data, true);
  }

}
