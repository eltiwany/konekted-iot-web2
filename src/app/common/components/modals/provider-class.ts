import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// A provider abstract class appears to be neccessary for
// data injection, but it doesn't need further definition.
export abstract class ProviderClass {}
