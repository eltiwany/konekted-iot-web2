import { FunctionsService } from './../../../../common/services/extras/functions.service';
import { ApiService } from './../../../../common/services/api/api.service';
import { ViewConfigBoardsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-boards/view-config-boards/view-config-boards.component';
import { AppConfigService } from './../../../../common/services/app-config.service';
import { DeleteBoardsComponent } from './../../../../common/components/modals/pages/link-hardwares/boards/delete-boards/delete-boards.component';
import { NewBoardsComponent } from './../../../../common/components/modals/pages/link-hardwares/boards/new-boards/new-boards.component';
import { BoardsService } from './../../../../services/iot/boards.service';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  modalComponent: Type<any>;
  modalViewComponent: Type<any>;
  modalDeleteComponent: Type<any>;

  data: any[] | any = [];

  constructor(
    private boardsService: BoardsService,
    public config: AppConfigService,
    public api: ApiService,
    public fn: FunctionsService
  ) {
    // Initialize modals for new, edit and delete
    this.modalComponent = NewBoardsComponent;
    this.modalViewComponent = ViewConfigBoardsComponent;
    this.modalDeleteComponent = DeleteBoardsComponent;
  }

  ngOnInit(): void {
    this.getBoards();
  }

  getBoards() {
    this.boardsService.getUserBoards().then((response) => {
      if (!response.error)
        this.data = response.data;
      // console.table(this.data);
    });
  }

}
