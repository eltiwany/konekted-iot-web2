import { SensorsService } from './../../../../services/iot/sensors.service';
import { DeleteConfigSensorsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-sensors/delete-config-sensors/delete-config-sensors.component';
import { EditConfigSensorsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-sensors/edit-config-sensors/edit-config-sensors.component';
import { ViewConfigSensorsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-sensors/view-config-sensors/view-config-sensors.component';
import { NewConfigSensorsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-sensors/new-config-sensors/new-config-sensors.component';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-config-sensors',
  templateUrl: './config-sensors.component.html',
  styleUrls: ['./config-sensors.component.css']
})
export class ConfigSensorsComponent implements OnInit {

  modalComponent: Type<any>;
  modalViewComponent: Type<any>;
  modalEditComponent: Type<any>;
  modalDeleteComponent: Type<any>;

  dtOptions: DataTables.Settings = {};
  data: any[] = [];
  sensorPinTypes: any[] = [];
  cols = ['id', 'email', 'role_name'];

  constructor(
    private sensors: SensorsService
  ) {
    // Initialize modals for new, edit and delete
    this.modalComponent = NewConfigSensorsComponent;
    this.modalViewComponent = ViewConfigSensorsComponent;
    this.modalEditComponent = EditConfigSensorsComponent;
    this.modalDeleteComponent = DeleteConfigSensorsComponent;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      serverSide: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.sensors.getSensors(dataTablesParameters)
          .then(response => {
              // console.table(response.data);

              this.data = response.data;
              callback({
                recordsTotal: response.recordsTotal,
                recordsFiltered: response.recordsFiltered,
                data: []
              });
            });
      },
      columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'description' },
        { data: 'pin_types', orderable: false },
        { data: 'number_of_pins', orderable: false },
        { data: '', orderable: false}
      ],
      responsive: true
    };

    this.getSensorPinTypes();
  }

  getSensorPinTypes() {
    this.sensors.getSensorPinTypes().then(response => {
      if (!response.error) {
        // console.table(response.data);
        this.sensorPinTypes = response.data;
      }
    });
  }

  sumPins(pins: any[]) {
    return pins.reduce((acc, curr) => {
      return acc = acc + curr.pin_count
    }, 0);
  }

}
