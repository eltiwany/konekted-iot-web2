import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InactiveService {
  status = false;
  constructor() {}

  checkInactive() {
    this.status = false;
    console.log('You are active');
    setTimeout(() => {
      // console.log('this function calls every 30secs');
      console.log('You are inactive');
      this.status = true;
    }, 10000);
  }
}
