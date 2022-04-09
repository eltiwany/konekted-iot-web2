import { ApiService } from './api/api.service';
import { HttpHrmService } from './../../services/http/http-hrm.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get preference from API
   * @param void
   * @returns Promise<any>
   */
  async getPreferences(): Promise<any> {
    return await this.http.get(this.api.preference.preferences, false);
  }

  /**
   * Get preference from API
   * @param void
   * @returns Promise<any>
   */
   async getPreference(key: string): Promise<any> {
    return await this.http.get(this.api.preference.preferences + "/" + key, false);
  }

  /**
   * Set preference from API
   * @param void
   * @returns Promise<any>
   */
   async setPreference(key: string, data: any): Promise<any> {
    return await this.http.put(this.api.preference.preferences, key, data, true);
  }

  /**
   * Remove preference from API
   * @param void
   * @returns Promise<any>
   */
   async removePreference(key: string): Promise<any> {
    return await this.http.delete(this.api.preference.preferences, key, true);
  }

  /**
   * Set preference from API
   * @param void
   * @returns Promise<any>
   */
   async setPreferenceFile(data: any): Promise<any> {
    return await this.http.postFiles(this.api.preference.preferenceFiles, data, true);
  }
}
