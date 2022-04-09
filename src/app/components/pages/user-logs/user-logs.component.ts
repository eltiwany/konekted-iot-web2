import { ClearLogsComponent } from './../../../common/components/modals/pages/user-logs/clear-logs/clear-logs.component';
import { UsersService } from './../../../services/pages/users.service';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-user-logs',
  templateUrl: './user-logs.component.html',
  styleUrls: ['./user-logs.component.css']
})
export class UserLogsComponent implements OnInit {
  // @ts-ignore
  modalComponent: Type<any>;
  dtOptions: DataTables.Settings = {};
  data: any[] = [];

  constructor(
    private users: UsersService
  ) {}

  ngOnInit(): void {
    this.modalComponent = ClearLogsComponent;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:25,
      processing: true,
      serverSide: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.users.getUserLogs(dataTablesParameters)
          .then(response => {
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
        { data: 'email' },
        { data: 'page' },
        { data: 'action' },
        { data: 'created_at' }
      ],
      responsive: true,
      order: [5, 'desc']
    };
  }

}
