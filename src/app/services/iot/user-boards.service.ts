import { HttpHrmService } from './../http/http-hrm.service';
import { ApiService } from './../../common/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserBoardsService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get user boards for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getBoards(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.userBoards.getBoards, dataTablesParameters, false);
  }

  /**
   * Get active board from API
   * @param void
   * @returns Promise<any>
   */
   async getActiveBoard(data: any): Promise<any> {
    return await this.http.post(this.api.userBoards.getActiveBoard, data, false);
  }

  /**
   * Get connect / link user board from API
   * @param void
   * @returns Promise<any>
   */
   async connectBoard(data: any): Promise<any> {
    return await this.http.post(this.api.userBoards.boards, data, true);
  }

  /**
   * Disconnect board from API
   * @param void
   * @returns Promise<any>
   */
   async disconnectBoard(id:string): Promise<any> {
    return await this.http.delete(this.api.userBoards.boards, id, true);
  }

}
