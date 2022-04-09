import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/pages/settings.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  data: any[] = [];
  constructor(
    private settings: SettingsService
  ) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      serverSide: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.settings.getPermissions(dataTablesParameters)
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
        { data: 'description' },
      ],
      responsive: true
    };
  }

}
