import { ApiService } from './../../../../../../services/api/api.service';
import { FunctionsService } from './../../../../../../services/extras/functions.service';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-view-config-actuators',
  templateUrl: './view-config-actuators.component.html',
  styleUrls: ['./view-config-actuators.component.css']
})
export class ViewConfigActuatorsComponent implements OnInit {

  data: any;
  analogPins: any[] = [];
  digitalPins: any[] = [];

  constructor(
    public fn: FunctionsService,
    private dataIn: ProviderClass,
    public api: ApiService
  ) {}

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
      this.analogPins = this.data.pins.filter((pin: any) => pin.pin_type === 'ANALOG');
      this.digitalPins = this.data.pins.filter((pin: any) => pin.pin_type === 'DIGITAL');
      // console.log(this.analogPins, this.digitalPins);
    }
  }

  filterPins(pins: any[], pinType: string) {
    return pins.filter(pin => pin.pin_type == pinType);
  }

}
