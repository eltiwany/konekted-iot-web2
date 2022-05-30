import { FunctionsService } from './../../../../common/services/extras/functions.service';
import { ApiService } from './../../../../common/services/api/api.service';
import { ViewConfigActuatorsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-actuators/view-config-actuators/view-config-actuators.component';
import { AppConfigService } from './../../../../common/services/app-config.service';
import { DeleteActuatorsComponent } from './../../../../common/components/modals/pages/link-hardwares/actuators/delete-actuators/delete-actuators.component';
import { NewActuatorsComponent } from './../../../../common/components/modals/pages/link-hardwares/actuators/new-actuators/new-actuators.component';
import { ActuatorsService } from './../../../../services/iot/actuators.service';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-control-actuators',
  templateUrl: './control-actuators.component.html',
  styleUrls: ['./control-actuators.component.css']
})
export class ControlActuatorsComponent implements OnInit {

  modalComponent: Type<any>;
  modalViewComponent: Type<any>;
  modalDeleteComponent: Type<any>;

  data: any[] | any = [];

  constructor(
    private actuatorsService: ActuatorsService,
    public config: AppConfigService,
    public api: ApiService,
    public fn: FunctionsService
  ) {
    // Initialize modals for new, edit and delete
    this.modalComponent = NewActuatorsComponent;
    this.modalViewComponent = ViewConfigActuatorsComponent;
    this.modalDeleteComponent = DeleteActuatorsComponent;
  }

  ngOnInit(): void {
    this.getActuators();
  }

  getActuators() {
    this.actuatorsService.getUserActuators().then((response) => {
      if (!response.error)
        this.data = response.data;
      // console.table(this.data);
    });
  }

}
