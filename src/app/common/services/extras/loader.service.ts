import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  /**
   * Pages that shows after user has logged in
   * just before dashboard shows up.
   */
  preloader = false;

  constructor(
    private loader: LoadingBarService,
    private router: Router,
  ) { }

  /**
   * Start the loader
   */
  start() {
    this.loader.start();
  }

  /**
   * Stop the loader
   */
  complete() {
    this.loader.complete();
  }

  /**
   * Refresh data on the current page
   */
  refresh(): any {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
