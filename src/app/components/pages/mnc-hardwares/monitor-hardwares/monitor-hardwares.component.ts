import { FunctionsService } from './../../../../common/services/extras/functions.service';
import { ApiService } from './../../../../common/services/api/api.service';
import { ViewConfigSensorsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-sensors/view-config-sensors/view-config-sensors.component';
import { AppConfigService } from './../../../../common/services/app-config.service';
import { DeleteSensorsComponent } from './../../../../common/components/modals/pages/link-hardwares/sensors/delete-sensors/delete-sensors.component';
import { NewSensorsComponent } from './../../../../common/components/modals/pages/link-hardwares/sensors/new-sensors/new-sensors.component';
import { SensorsService } from './../../../../services/iot/sensors.service';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-monitor-hardwares',
  templateUrl: './monitor-hardwares.component.html',
  styleUrls: ['./monitor-hardwares.component.css']
})
export class MonitorHardwaresComponent implements OnInit {

  data: any[] | any = [];

  constructor(
    private sensorsService: SensorsService,
    public config: AppConfigService,
    public api: ApiService,
    public fn: FunctionsService
  ) { }

  ngOnInit(): void {
    this.getSensors();
  }

  getSensors() {
    this.sensorsService.getUserSensorValues().then((response) => {
      if (!response.error)
        this.data = response.data;
      console.table(this.data);
    });
  }

}
