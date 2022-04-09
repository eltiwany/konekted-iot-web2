import { ApiService } from './../../../common/services/api/api.service';
import { HttpHrmService } from './../../http/http-hrm.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryReportsService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get banks for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getSummary(): Promise<any> {
    return await this.http.get(this.api.reports.summaryReports, false);
  }
}
