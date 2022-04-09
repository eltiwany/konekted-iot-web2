import { HttpHrmService } from './../http/http-hrm.service';
import { ApiService } from './../../common/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get notifications from API
   * @param void
   * @returns Promise<any>
   */
   async getRetiredEmployees(data: any): Promise<any> {
    return await this.http.post(this.api.notifications.getRetired, data, false);
  }
}
