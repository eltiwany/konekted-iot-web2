import { GeneralValidators } from './../../../validators/general.validators';
import { AuthValidators } from './../../../validators/auth.validators';
import { AuthService } from './../../../services/auth/auth.service';
import { AppConfigService } from './../../../common/services/app-config.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public config: AppConfigService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.auth.getAuth();
  }

  form = new FormGroup({
    'email': new FormControl('', [AuthValidators.email]),
    'name': new FormControl('', [GeneralValidators.required]),
    'passwords': new FormGroup({
      'password': new FormControl('', [AuthValidators.password]),
      'confirmPassword': new FormControl('', [AuthValidators.password]),
    }, {validators: AuthValidators.confirmPassword})
  });

  get email() {
    return this.form.get('email');
  }

  get name() {
    return this.form.get('name');
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
      name: this.name?.value,
      email: this.email?.value,
      password: this.password?.value,
    };

    this.auth.register(data).then((response) => {
      if (!response.error) {
        this.router.navigate(['/login']);
      }
    });
  }

}
