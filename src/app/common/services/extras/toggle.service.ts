import { AuthService } from './../../../services/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  open = !this.auth.isGuest() ? false : true;

  constructor(
    private auth: AuthService
  ) { }

  /**
   * Changes the toggle
   */
  change() {
    this.open = !this.open;
  }

}
