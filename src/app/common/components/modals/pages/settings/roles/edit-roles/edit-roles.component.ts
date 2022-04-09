import { FunctionsService } from './../../../../../../services/extras/functions.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { GeneralValidators } from './../../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/pages/settings.service';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.css']
})
export class EditRolesComponent implements OnInit {
  permissions: any[] = [];
  selectedPermissions: any[] = [];
  pages: any[] = [];
  newPermissionsArray: any[] = [];
  data: any;

  constructor(
    private modal: ModalsService,
    private settings: SettingsService,
    private loader: LoaderService,
    public fn: FunctionsService,
    public dataIn: ProviderClass
  ) {}

  form = new FormGroup({
    'roleName': new FormControl('', [GeneralValidators.required]),
    'isDefault': new FormControl(),
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
    if (this.dataIn) {
      this.data = this.dataIn;
      this.getSelectedRole(this.data.id);
      this.form.setControl('roleName', new FormControl(this.data.name, [GeneralValidators.required]));
      this.form.setControl('isDefault', new FormControl(this.data.is_default));
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

    this.settings.updateRole(this.data.id, data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
