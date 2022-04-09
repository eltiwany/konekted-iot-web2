import { FunctionsService } from './../../../../../../services/extras/functions.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { GeneralValidators } from './../../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/pages/settings.service';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-view-roles',
  templateUrl: './view-roles.component.html',
  styleUrls: ['./view-roles.component.css']
})
export class ViewRolesComponent implements OnInit {

  permissions: any[] = [];
  selectedPermissions: any[] = [];
  pages: any[] = [];
  newPermissionsArray: any[] = [];
  data: any;

  constructor(
    private settings: SettingsService,
    public fn: FunctionsService,
    public dataIn: ProviderClass
  ) {}


  ngOnInit(): void {
    this.getPageAccess();
    this.getPermissions();
    if (this.dataIn) {
      this.data = this.dataIn;
      this.getSelectedRole(this.data.id);
    }

  }

  getPermissions() {
    return this.settings.getPermissionsUnfiltered().then((response) => {
      if (!response.error) {
        this.permissions = response.data;
      }
    });
  }

  getSelectedRole(id: string) {
    return this.settings.showRole(id).then((response) => {
      if (!response.error) {
        this.selectedPermissions = response.data?.rolePermissions;
        // console.log(this.selectedPermissions);
        this.selectedPermissions.forEach((rolePermission) => {
          this.newPermissionsArray.push({
            pageId: rolePermission.page_id,
            permissionId: rolePermission.permission_id
          });
        });
      }
    });
  }

  isChecked(permissionId: any, pageId: string) {
    let checked = false;
    this.selectedPermissions.forEach((rolePermission: any) => {
      if (rolePermission.page_id == pageId && rolePermission.permission_id == permissionId) {
        checked = true;
        return;
      }
    });
    return checked;
  }

  getSelectedPermissions() {
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

}
