import { UsersService } from './../../../../../../services/pages/users.service';
import { AuthValidators } from './../../../../../../validators/auth.validators';
import { FunctionsService } from './../../../../../services/extras/functions.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../services/layouts/modals.service';
import { GeneralValidators } from './../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/pages/settings.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit {

  roles: any[] = [];
  selectors = {
    role: '-- Select Role --'
  }

  constructor(
    private modal: ModalsService,
    private users: UsersService,
    private settings: SettingsService,
    private loader: LoaderService,
    public fn: FunctionsService
  ) {}

  form = new FormGroup({
    'name': new FormControl('', [GeneralValidators.required]),
    'email': new FormControl('', [AuthValidators.email]),
    'roleId': new FormControl(this.selectors.role, [GeneralValidators.required, GeneralValidators.isNot(this.selectors.role)]),
  });

  get email() {
    return this.form.get('email');
  }

  get name() {
    return this.form.get('name');
  }

  get roleId() {
    return this.form.get('roleId');
  }

  ngOnInit(): void {
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
      name: this.name?.value,
      roleId: this.roleId?.value,
      password: 'user12345',
    };
    // console.log(data);

    this.users.newUser(data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
