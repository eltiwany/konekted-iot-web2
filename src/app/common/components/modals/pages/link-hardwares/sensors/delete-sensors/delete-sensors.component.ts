import { SensorsService } from './../../../../../../../services/iot/sensors.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-delete-sensors',
  templateUrl: './delete-sensors.component.html',
  styleUrls: ['./delete-sensors.component.css']
})
export class DeleteSensorsComponent implements OnInit {

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
    this.sensorService.deleteUserSensor(this.sensorId?.value).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
