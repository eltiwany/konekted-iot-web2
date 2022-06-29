import { ActuatorsService } from './../../../../services/iot/actuators.service';
import { ModalsService } from './../../../services/layouts/modals.service';
import { AppConfigService } from './../../../services/app-config.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-device-card',
  templateUrl: './control-device-card.component.html',
  styleUrls: ['./control-device-card.component.css']
})
export class ControlDeviceCardComponent implements OnInit {
  checked: any[] = [];

  @Input() imageUrl: string = this.config.preferences.imageSelector;
  @Input() iconName: string = "plus-circle-fill";
  @Input() color: "tertiary" | "primary" | "success" | "info" | "dark" | "warning" = "tertiary";

  @Input() isImage: boolean = false;

  @Input() deviceName: string = "Device Name";
  @Input() deviceId: number = 0;
  @Input() isSwitchedOn: boolean = false;
  @Input() isActiveLow: boolean = false;

  onChecked(input: any, id: number, fromDiv = false) {
    // console.log(input.target.value, input.target.checked, id);
    if (fromDiv)
      input.target.checked = !input.target.checked;
    this.checked[id] = this.isSwitchedOn = this.isActiveLow ? !input.target.checked : input.target.checked;

    let data = {
      'userActuatorId': id,
      'isSwitchedOn': this.isActiveLow ? !input.target.checked : input.target.checked,
    }
    console.log(input.target.value, this.isSwitchedOn, this.isActiveLow, !this.isSwitchedOn && this.isActiveLow);
    this.actuatorsService.switchActuator(data).then((response) => {
      if(response.error) {
        this.checked[id] = !this.checked[id];
        input.target.checked = !input.target.checked;
      }
    });
  }

  constructor(
    private config: AppConfigService,
    public modalService: ModalsService,
    private actuatorsService: ActuatorsService
  ) {}

  ngOnInit(): void {
    // console.log(this.isSwitchedOn, this.isActiveLow, (!this.isSwitchedOn && this.isActiveLow), (this.isSwitchedOn && !this.isActiveLow), "=>", (!this.isSwitchedOn && this.isActiveLow) || (this.isSwitchedOn && !this.isActiveLow));

  }
}
