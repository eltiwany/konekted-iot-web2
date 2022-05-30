import { ApiService } from './../../../../../../services/api/api.service';
import { FunctionsService } from './../../../../../../services/extras/functions.service';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-view-config-boards',
  templateUrl: './view-config-boards.component.html',
  styleUrls: ['./view-config-boards.component.css']
})
export class ViewConfigBoardsComponent implements OnInit {

  data: any;

  constructor(
    public fn: FunctionsService,
    private dataIn: ProviderClass,
    public api: ApiService
  ) {}

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
    }
  }

  filterPins(pins: any[], pinType: string) {
    return pins.filter(pin => pin.pin_type == pinType);
  }

}
