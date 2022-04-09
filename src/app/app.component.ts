import { CommonAuthService } from './common/services/common-auth.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { AppConfigService } from './common/services/app-config.service';
import { ToggleService } from './common/services/extras/toggle.service';
import { AuthService } from './services/auth/auth.service';
import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userActivity: any;
  userInactive: Subject<any> = new Subject();

  constructor(
    public auth: AuthService,
    private commonAuth: CommonAuthService,
    public toggle: ToggleService,
    public config: AppConfigService,
    public loader: LoaderService,
  ) {
    this.setTimeout();
    this.userInactive.subscribe(() => {
      if (!this.auth.isGuest())
        this.commonAuth.logout();
    });
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), this.getMins(10));
  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

  getMins(minutes: number) {
    return minutes * 60000;
  }
}
