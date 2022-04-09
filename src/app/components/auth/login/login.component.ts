import { AlertService } from './../../../common/services/extras/alert.service';
import { AuthService } from './../../../services/auth/auth.service';
import { AuthValidators } from './../../../validators/auth.validators';
import { AppConfigService } from './../../../common/services/app-config.service';
import { IconsService } from './../../../common/services/extras/icons.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public icons: IconsService,
    public config: AppConfigService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private loader: LoaderService
  ) { }

  ngOnInit(): void {
    this.auth.getAuth();
  }

  form = new FormGroup({
    'email': new FormControl('', [AuthValidators.email]),
    'password': new FormControl('', [AuthValidators.password])
  });

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit = (): void => {
    const data = {
      email: this.email?.value,
      password: this.password?.value
    };
    this.auth.authenticate(data).then((response) => {
      if (!response.error) {
        this.auth.setAuth(response.data);
        this.moveToDashboard();
      }
    });
  }

  moveToDashboard() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    this.router.navigate([returnUrl || '/dashboard']).then(() => {
      // console.log('preloader is loading ...');
      this.loader.preloader = true;
      window.location.reload();
    });
  }

}
