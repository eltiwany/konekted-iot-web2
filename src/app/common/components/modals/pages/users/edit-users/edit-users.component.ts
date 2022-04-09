import { UsersService } from './../../../../../../services/pages/users.service';
import { AuthValidators } from './../../../../../../validators/auth.validators';
import { FunctionsService } from './../../../../../services/extras/functions.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../services/layouts/modals.service';
import { GeneralValidators } from './../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/pages/settings.service';
import { ProviderClass } from '../../../provider-class';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  data: any;
  roles: any[] = [];
  selectors = {
    role: '-- Select Role --'
  }

  constructor(
    private modal: ModalsService,
    private users: UsersService,
    private settings: SettingsService,
    private loader: LoaderService,
    public fn: FunctionsService,
    private dataIn: ProviderClass
  ) {}

  form = new FormGroup({
    'email': new FormControl(),
    'roleId': new FormControl(),
  });

  get email() {
    return this.form.get('email');
  }

  get roleId() {
    return this.form.get('roleId');
  }

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
      this.form.setControl('email', new FormControl(this.data.email, [GeneralValidators.required]));
      this.form.setControl('roleId', new FormControl(this.data.role_id, [GeneralValidators.required, GeneralValidators.isNot(this.selectors.role)]));
    }
    this.getRoles();
  }

  getRoles() {
    return this.settings.getRolesUnfiltered().then((response) => {
      if (!response.error) {
        this.roles = response.data;
      }
    });
  }

  onSubmit = (): void => {
    const data = {
      email: this.email?.value,
      roleId: this.roleId?.value
    };
    // console.log(data);

    this.users.updateUser(this.data?.id, data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
