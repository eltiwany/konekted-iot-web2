import { BoardsService } from './../../../../services/iot/boards.service';
import { DeleteConfigBoardsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-boards/delete-config-boards/delete-config-boards.component';
import { EditConfigBoardsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-boards/edit-config-boards/edit-config-boards.component';
import { ViewConfigBoardsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-boards/view-config-boards/view-config-boards.component';
import { NewConfigBoardsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-boards/new-config-boards/new-config-boards.component';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-config-boards',
  templateUrl: './config-boards.component.html',
  styleUrls: ['./config-boards.component.css']
})
export class ConfigBoardsComponent implements OnInit {

  modalComponent: Type<any>;
  modalViewComponent: Type<any>;
  modalEditComponent: Type<any>;
  modalDeleteComponent: Type<any>;

  dtOptions: DataTables.Settings = {};
  data: any[] = [];
  boardPinTypes: any[] = [];
  cols = ['id', 'email', 'role_name'];

  constructor(
    private boards: BoardsService
  ) {
    // Initialize modals for new, edit and delete
    this.modalComponent = NewConfigBoardsComponent;
    this.modalViewComponent = ViewConfigBoardsComponent;
    this.modalEditComponent = EditConfigBoardsComponent;
    this.modalDeleteComponent = DeleteConfigBoardsComponent;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      serverSide: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.boards.getBoards(dataTablesParameters)
          .then(response => {
              // console.table(response.data);

              this.data = response.data;
              callback({
                recordsTotal: response.recordsTotal,
                recordsFiltered: response.recordsFiltered,
                data: []
              });
            });
      },
      columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'description' },
        { data: 'pin_types', orderable: false },
        { data: 'number_of_pins', orderable: false },
        { data: '', orderable: false}
      ],
      responsive: true
    };

    this.getBoardPinTypes();
  }

  getBoardPinTypes() {
    this.boards.getBoardPinTypes().then(response => {
      if (!response.error) {
        // console.table(response.data);
        this.boardPinTypes = response.data;
      }
    });
  }

  sumPins(pins: any[]) {
    return pins.reduce((acc, curr) => {
      return acc = acc + curr.pin_count
    }, 0);
  }

}
