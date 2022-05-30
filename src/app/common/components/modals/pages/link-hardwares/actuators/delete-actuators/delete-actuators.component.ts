import { ActuatorsService } from './../../../../../../../services/iot/actuators.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-delete-actuators',
  templateUrl: './delete-actuators.component.html',
  styleUrls: ['./delete-actuators.component.css']
})
export class DeleteActuatorsComponent implements OnInit {

  form = new FormGroup({
    actuatorId: new FormControl('')
  });

  data: any
  constructor(
    private modal: ModalsService,
    private actuatorService: ActuatorsService,
    private loader: LoaderService,
    public dataIn: ProviderClass
  ) { }

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
      this.form.setControl('actuatorId', new FormControl(this.data.actuator.id));
    }
  }

  get actuatorId() {
    return this.form.get('actuatorId');
  }

  onSubmit() {
    this.actuatorService.deleteUserActuator(this.actuatorId?.value).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
