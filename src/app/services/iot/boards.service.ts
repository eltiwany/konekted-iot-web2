import { HttpHrmService } from './../http/http-hrm.service';
import { ApiService } from './../../common/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
  ) { }

  /**
   * Get boards for datatable from API
   * @param void
   * @returns Promise<any>
   */
  async getBoards(dataTablesParameters: any): Promise<any> {
    return await this.http.post(this.api.boards.getBoards, dataTablesParameters, false);
  }

  /**
   * Get linked boards for datatable from API
   * @param void
   * @returns Promise<any>
   */
   async getUserBoards(): Promise<any> {
    return await this.http.get(this.api.boards.userBoards, false);
  }


  /**
   * Get board pin types for datatable from API
   * @param void
   * @returns Promise<any>
   */
   async getBoardPinTypes(): Promise<any> {
    return await this.http.post(this.api.boards.getBoardPinTypes, false);
  }

  /**
   * Get boards from API
   * @param void
   * @returns Promise<any>
   */
   async getBoardsUnfiltered(): Promise<any> {
    return await this.http.get(this.api.boards.boards, false);
  }

  /**
   * New board from API
   * @param void
   * @returns Promise<any>
   */
   async newBoard(data: any): Promise<any> {
    return await this.http.postFiles(this.api.boards.boards, data, true);
  }

  /**
   * Link board to a user from API
   * @param void
   * @returns Promise<any>
   */
   async newUserBoard(data: any): Promise<any> {
    return await this.http.post(this.api.boards.userBoards, data, true);
  }

  /**
   * Update board from API
   * @param void
   * @returns Promise<any>
   */
   async updateBoard(id:string, data: any): Promise<any> {
    return await this.http.postFiles(this.api.boards.boards, data, true);
  }

  /**
   * Delete board from API
   * @param void
   * @returns Promise<any>
   */
   async deleteBoard(id:string): Promise<any> {
    return await this.http.delete(this.api.boards.boards, id, true);
  }

  /**
   * Delete board from API
   * @param void
   * @returns Promise<any>
   */
   async deleteUserBoard(id:string): Promise<any> {
    return await this.http.delete(this.api.boards.userBoards, id, true);
  }

}
