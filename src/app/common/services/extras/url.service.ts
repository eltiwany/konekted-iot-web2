import { FunctionsService } from './functions.service';
import { AuthService } from './../../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  urls: any;

  constructor(
    private router: Router,
    private auth: AuthService,
    private fn: FunctionsService
  ) {
    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        if (!this.auth.isGuest()) {
          this.urls = this.getCurrentUrl(event.url);
        }
      }
    });
  }

  getCurrentUrl(url: string): any {
    // console.log(this.router.url);
    let urlArray = url.split('/')
    for (let i = 1; i < (urlArray.length); i++) {
      if (urlArray[i] != '')
        urlArray[i] = this.fn.toUpperCamelCase(urlArray[i]);
    }
    urlArray = urlArray.slice(1);
    return urlArray;
  }

  getLastURLPath() {
    return this.urls ? this.urls[this.urls.length - 1] : 'Page Not Loaded';
  }
}
