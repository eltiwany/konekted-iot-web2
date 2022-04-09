import { Component, Input, OnInit } from '@angular/core';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-view-page-access',
  templateUrl: './view-page-access.component.html',
  styleUrls: ['./view-page-access.component.css']
})
export class ViewPageAccessComponent implements OnInit {
  data: any = [];

  constructor(
    public dataIn: ProviderClass
    ) { }

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
    }
  }
}
