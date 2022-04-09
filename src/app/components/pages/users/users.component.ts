import { ResetUsersComponent } from './../../../common/components/modals/pages/users/reset-users/reset-users.component';
import { UsersService } from './../../../services/pages/users.service';
import { DeleteUsersComponent } from './../../../common/components/modals/pages/users/delete-users/delete-users.component';
import { EditUsersComponent } from './../../../common/components/modals/pages/users/edit-users/edit-users.component';
import { ViewUsersComponent } from './../../../common/components/modals/pages/users/view-users/view-users.component';
import { NewUsersComponent } from './../../../common/components/modals/pages/users/new-users/new-users.component';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  modalComponent: Type<any>;
  modalViewComponent: Type<any>;
  modalEditComponent: Type<any>;
  modalDeleteComponent: Type<any>;
  modalResetComponent: Type<any>;

  dtOptions: DataTables.Settings = {};
  data: any[] = [];
  cols = ['id', 'email', 'role_name'];

  constructor(
    private users: UsersService
  ) {
    // Initialize modals for new, edit and delete
    this.modalComponent = NewUsersComponent;
    this.modalViewComponent = ViewUsersComponent;
    this.modalEditComponent = EditUsersComponent;
    this.modalDeleteComponent = DeleteUsersComponent;
    this.modalResetComponent = ResetUsersComponent;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      serverSide: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.users.getUsers(dataTablesParameters)
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
        { data: 'role_name' },
        { data: '', orderable: false}
      ],
      responsive: true
    };
  }

}
