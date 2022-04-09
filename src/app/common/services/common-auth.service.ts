import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonAuthService {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  logout() {
    this.auth.logout().then((response) => {
      if (!response.error) {
        this.auth.removeStorage();
        this.router.navigate(['/login']);
      }
    });
  }
}
