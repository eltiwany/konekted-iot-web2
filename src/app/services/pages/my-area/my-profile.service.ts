import { ApiService } from './../../../common/services/api/api.service';
import { HttpHrmService } from './../../http/http-hrm.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Change user password
   * @param void
   * @returns Promise<any>
   */
   async changePassword(data: any): Promise<any> {
    return await this.http.post(this.api.myArea.changePassword, data, true);
  }
}
