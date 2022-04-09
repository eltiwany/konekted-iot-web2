import { LoaderService } from './../../../../common/services/extras/loader.service';
import { MyProfileService } from './../../../../services/pages/my-area/my-profile.service';
import { GeneralValidators } from './../../../../validators/general.validators';
import { AuthValidators } from './../../../../validators/auth.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../../../services/auth/auth.service';
import { AppConfigService } from './../../../../common/services/app-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    public config: AppConfigService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private profile: MyProfileService,
    private loader: LoaderService
  ) { }

  ngOnInit(): void {
    this.auth.getAuth();
  }

  form = new FormGroup({
    'currentPassword': new FormControl('', [GeneralValidators.required]),
    'passwords': new FormGroup({
      'password': new FormControl('', [AuthValidators.password]),
      'confirmPassword': new FormControl('', [AuthValidators.password]),
    }, {validators: AuthValidators.confirmPassword})
  });

  get currentPassword() {
    return this.form.get('currentPassword');
  }

  get passwords() {
    return this.form.get('passwords');
  }

  get password() {
    return this.form.get('passwords.password');
  }

  get confirmPassword() {
    return this.form.get('passwords.confirmPassword');
  }

  onSubmit = (): void => {
    const data = {
      currentPassword: this.currentPassword?.value,
      password: this.confirmPassword?.value,
    };
    // console.log(data);

    this.profile.changePassword(data).then((response) => {
      if (!response.error) {
        this.loader.refresh();
      }
    });
  }

}
