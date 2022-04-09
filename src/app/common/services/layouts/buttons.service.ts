import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {
  topbar = {
    add: false,
    options: {
      excel: false,
      pdf: false,
      print: false
    },
    addName: 'New Item'
  };

  constructor() { }
}
