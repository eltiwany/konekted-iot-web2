import { HttpHrmService } from './../http/http-hrm.service';
import { ApiService } from './../../common/services/api/api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode, { JwtPayload } from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get page accesses from API
   * @param void
   * @returns Promise<any>
   */
  async getPageAccess(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.settings.getPageAccess, dataTablesParameters, false);
  }

  /**
   * Get permissions from API
   * @param void
   * @returns Promise<any>
   */
   async getPageAccessUnfiltered(): Promise<any> {
    return await this.http.get(this.api.settings.pageAccess, false);
  }

  /**
   * New page accesses from API
   * @param void
   * @returns Promise<any>
   */
   async newPageAccess(data: any): Promise<any> {
    return await this.http.post(this.api.settings.pageAccess, data, true);
  }

  /**
   * Update page accesses from API
   * @param void
   * @returns Promise<any>
   */
   async updatePageAccess(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.settings.pageAccess, id, data, true);
  }

  /**
   * Delete page accesses from API
   * @param void
   * @returns Promise<any>
   */
   async deletePageAccess(id:string): Promise<any> {
    return await this.http.delete(this.api.settings.pageAccess, id, true);
  }

  // ---------------------------------------------------------------------------------------- //

  /**
   * Get permissions from API
   * @param void
   * @returns Promise<any>
   */
   async getPermissions(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.settings.getPermissions, dataTablesParameters, false);
  }

  /**
   * Get all permissions from API
   * @param void
   * @returns Promise<any>
   */
   async getPermissionsUnfiltered(): Promise<any> {
    return await this.http.get(this.api.settings.permissions, false);
  }

  // ---------------------------------------------------------------------------------------- //

  /**
   * Get roles from API
   * @param void
   * @returns Promise<any>
   */
   async getRoles(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.settings.getRoles, dataTablesParameters, false);
  }

  /**
   * Get all roles from API
   * @param void
   * @returns Promise<any>
   */
   async getRolesUnfiltered(): Promise<any> {
    return await this.http.get(this.api.settings.roles, false);
  }

  /**
   * Show role of specified ID from API
   * @param roleId id
   * @returns Promise<any>
   */
   async showRole(id: string): Promise<any> {
    return await this.http.show(this.api.settings.roles, id, false);
  }

  /**
   * New roles with specified permissions
   * @param void
   * @returns Promise<any>
   */
   async newRole(data: any): Promise<any> {
    return await this.http.post(this.api.settings.roles, data, true);
  }

  /**
   * Update roles with specified permissions
   * @param roleId id
   * @param data data
   * @returns Promise<any>
   */
   async updateRole(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.settings.roles, id, data, true);
  }

  /**
   * Delete role of specified ID from API
   * @param roleId id
   * @returns Promise<any>
   */
   async deleteRole(id: string): Promise<any> {
    return await this.http.delete(this.api.settings.roles, id, true);
  }

  // ---------------------------------------------------------------------------------------- //

  /**
   * Get attachments from API
   * @param void
   * @returns Promise<any>
   */
   async getAttachments(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.settings.getAttachments, dataTablesParameters, false);
  }

  /**
   * Get permissions from API
   * @param void
   * @returns Promise<any>
   */
   async getAttachmentsUnfiltered(): Promise<any> {
    return await this.http.get(this.api.settings.attachments, false);
  }

  /**
   * New attachments from API
   * @param void
   * @returns Promise<any>
   */
   async newAttachments(data: any): Promise<any> {
    return await this.http.post(this.api.settings.attachments, data, true);
  }

  /**
   * Update attachments from API
   * @param void
   * @returns Promise<any>
   */
   async updateAttachments(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.settings.attachments, id, data, true);
  }

  /**
   * Delete attachments from API
   * @param void
   * @returns Promise<any>
   */
   async deleteAttachments(id:string): Promise<any> {
    return await this.http.delete(this.api.settings.attachments, id, true);
  }

  // ---------------------------------------------------------------------------------------- //

  /**
   * Get attachments from API
   * @param void
   * @returns Promise<any>
   */
   async getIdentificationNumbers(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.settings.getIdentificationNumbers, dataTablesParameters, false);
  }

  /**
   * Get identificationNumbers from API
   * @param void
   * @returns Promise<any>
   */
   async getIdentificationNumbersUnfiltered(): Promise<any> {
    return await this.http.get(this.api.settings.identificationNumbers, false);
  }

  /**
   * New identificationNumbers from API
   * @param void
   * @returns Promise<any>
   */
   async newIdentificationNumbers(data: any): Promise<any> {
    return await this.http.post(this.api.settings.identificationNumbers, data, true);
  }

  /**
   * Update identificationNumbers from API
   * @param void
   * @returns Promise<any>
   */
   async updateIdentificationNumbers(id:string, data: any): Promise<any> {
    return await this.http.put(this.api.settings.identificationNumbers, id, data, true);
  }

  /**
   * Delete identificationNumbers from API
   * @param void
   * @returns Promise<any>
   */
   async deleteIdentificationNumbers(id:string): Promise<any> {
    return await this.http.delete(this.api.settings.identificationNumbers, id, true);
  }

}
