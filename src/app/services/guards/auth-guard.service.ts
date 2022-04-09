import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate(route: any, state: RouterStateSnapshot): any {
    if (this.auth.isGuest()) {
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
    if (this.auth.tokenExpired()) {
      this.auth.logout();
    }
    return true;
  }
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
}
