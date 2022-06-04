import { BoardsService } from './boards.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {
  isOnline = false;
  boardName = "";

  constructor(
    private boardsService: BoardsService,
  ) { }

  getActiveBoard() {
    this.boardsService.getUserBoards().then((response) => {
      if (response.error) return;
      if (!response.data[0]) return;

      this.boardName = response.data[0].board.name;
      this.isOnline = response.data[0].board.is_online;
    })
  }
}
