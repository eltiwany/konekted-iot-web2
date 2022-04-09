import { FunctionsService } from './../../../../../services/extras/functions.service';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../provider-class';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  data: any;

  constructor(
    public fn: FunctionsService,
    private dataIn: ProviderClass
  ) {}

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
    }
  }

}
