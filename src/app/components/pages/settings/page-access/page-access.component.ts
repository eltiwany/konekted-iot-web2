import { ViewPageAccessComponent } from './../../../../common/components/modals/pages/settings/page-access/view-page-access/view-page-access.component';
import { DeletePageAccessComponent } from './../../../../common/components/modals/pages/settings/page-access/delete-page-access/delete-page-access.component';
import { EditPageAccessComponent } from './../../../../common/components/modals/pages/settings/page-access/edit-page-access/edit-page-access.component';
import { NewPageAccessComponent } from './../../../../common/components/modals/pages/settings/page-access/new-page-access/new-page-access.component';
import { ButtonsService } from './../../../../common/services/layouts/buttons.service';
import { Component, OnInit, Type } from '@angular/core';
import { SettingsService } from 'src/app/services/pages/settings.service';

@Component({
  selector: 'app-page-access',
  templateUrl: './page-access.component.html',
  styleUrls: ['./page-access.component.css']
})
export class PageAccessComponent implements OnInit {
  modalComponent: Type<any>;
  modalViewComponent: Type<any>;
  modalEditComponent: Type<any>;
  modalDeleteComponent: Type<any>;
  dtOptions: DataTables.Settings = {};
  data: any[] = [];
  cols = ['id', 'name'];

  constructor(
    private settings: SettingsService
  ) {
    // Initialize modals for new, edit and delete
    this.modalComponent = NewPageAccessComponent;
    this.modalViewComponent = ViewPageAccessComponent;
    this.modalEditComponent = EditPageAccessComponent;
    this.modalDeleteComponent = DeletePageAccessComponent;
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      serverSide: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.settings.getPageAccess(dataTablesParameters)
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
        { data: '', orderable: false}
      ],
      responsive: true
    };
  }

}
