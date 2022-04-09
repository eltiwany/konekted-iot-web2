import { ViewRolesComponent } from './../../../../common/components/modals/pages/settings/roles/view-roles/view-roles.component';
import { SettingsService } from './../../../../services/pages/settings.service';
import { DeleteRolesComponent } from './../../../../common/components/modals/pages/settings/roles/delete-roles/delete-roles.component';
import { EditRolesComponent } from './../../../../common/components/modals/pages/settings/roles/edit-roles/edit-roles.component';
import { NewRolesComponent } from './../../../../common/components/modals/pages/settings/roles/new-roles/new-roles.component';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  modalComponent: Type<any>;
  modalEditComponent: Type<any>;
  modalViewComponent: Type<any>;
  modalDeleteComponent: Type<any>;
  dtOptions: DataTables.Settings = {};
  roles: any[] = [];
  cols: any[] = ['id', 'name'];

  constructor(
    private settings: SettingsService
  ) {
    // Initialize modals for new, edit and delete
    this.modalComponent = NewRolesComponent;
    this.modalViewComponent = ViewRolesComponent;
    this.modalEditComponent = EditRolesComponent;
    this.modalDeleteComponent = DeleteRolesComponent;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      serverSide: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.settings.getRoles(dataTablesParameters)
          .then(response => {
              this.roles = response.data;
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
        { data: '', orderable: false}
      ],
      responsive: true
    };
  }

  ngOnInit(): void {
  }

}
