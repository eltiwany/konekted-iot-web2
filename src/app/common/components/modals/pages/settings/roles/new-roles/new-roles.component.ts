import { FunctionsService } from './../../../../../../services/extras/functions.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { GeneralValidators } from './../../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/pages/settings.service';

@Component({
  selector: 'app-new-roles',
  templateUrl: './new-roles.component.html',
  styleUrls: ['./new-roles.component.css']
})
export class NewRolesComponent implements OnInit {
  permissions: any[] = [];
  pages: any[] = [];
  newPermissionsArray: any[] = [];

  // Datatables for pages
  dtOptions: DataTables.Settings = {};
  data: any[] = [];

  constructor(
    private modal: ModalsService,
    private settings: SettingsService,
    private loader: LoaderService,
    public fn: FunctionsService
  ) {}

  form = new FormGroup({
    'roleName': new FormControl('', [GeneralValidators.required]),
    'isDefault': new FormControl(false),
  });

  get roleName() {
    return this.form.get('roleName');
  }

  get isDefault() {
    return this.form.get('isDefault');
  }


  ngOnInit(): void {
    this.getPageAccess();
    this.getPermissions();
  }

  getPermissions() {
    return this.settings.getPermissionsUnfiltered().then((response) => {
      if (!response.error) {
        this.permissions = response.data;
      }
    });
  }

  getPageAccess() {
    return this.settings.getPageAccessUnfiltered().then((response) => {
      if (!response.error) {
        this.pages = response.data;
      }
    });
  }

  getPageAccessDT() {
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
        { data: 'name' },
        { data: 'id' },
        { data: 'id' },
        { data: 'id' },
        { data: 'id' },
      ],
      responsive: true
    };
  }

  /**
   * Handles check event on selected permission
   * @param event checkboxInput
   * @param pageId pageId
   */
  handlePermissions(event: any, pageId: string) {
    let permissionId = event.target.value;
    let isChecked = event.target.checked;
    if (isChecked)
      this.addPermission(pageId, permissionId);
    else
      this.removePermission(pageId, permissionId);

    // console.log(this.newPermissionsArray);

  }

  /**
   * Add permission from array
   * @param pageId pageId
   * @param permission permissionId
   */
  addPermission(pageId: string, permissionId: string) {
    this.newPermissionsArray.push({
      pageId: pageId,
      permissionId: permissionId
    });
  }

  /**
   * Remove permission from array
   * @param pageId pageId
   * @param permission permissionId
   */
  removePermission(pageId: string, permissionId: string) {
    let temporaryPermissions: any[] = this.newPermissionsArray.filter((e) => {
      // console.log(e.permission, permission, e.pageId, pageId);
      return !(e.permissionId == permissionId && e.pageId == pageId);
    });
    this.newPermissionsArray = temporaryPermissions;
  }

  onSubmit = (): void => {
    const data = {
      roleName: this.roleName?.value,
      isDefault: this.isDefault?.value,
      rolePermissions: this.newPermissionsArray
    };
    // console.log(data);

    this.settings.newRole(data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
