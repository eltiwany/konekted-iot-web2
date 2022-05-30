import { SensorsService } from './../../../../../../../services/iot/sensors.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-delete-config-sensors',
  templateUrl: './delete-config-sensors.component.html',
  styleUrls: ['./delete-config-sensors.component.css']
})
export class DeleteConfigSensorsComponent implements OnInit {

  form = new FormGroup({
    sensorId: new FormControl('')
  });

  data: any
  constructor(
    private modal: ModalsService,
    private sensorService: SensorsService,
    private loader: LoaderService,
    public dataIn: ProviderClass
  ) { }

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
      this.form.setControl('sensorId', new FormControl(this.data.sensor.id));
    }
  }

  get sensorId() {
    return this.form.get('sensorId');
  }

  onSubmit() {
    this.sensorService.deleteSensor(this.sensorId?.value).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
