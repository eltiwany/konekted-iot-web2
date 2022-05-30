import { ActuatorsService } from './../../../../services/iot/actuators.service';
import { DeleteConfigActuatorsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-actuators/delete-config-actuators/delete-config-actuators.component';
import { EditConfigActuatorsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-actuators/edit-config-actuators/edit-config-actuators.component';
import { ViewConfigActuatorsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-actuators/view-config-actuators/view-config-actuators.component';
import { NewConfigActuatorsComponent } from './../../../../common/components/modals/pages/config-hardwares/config-actuators/new-config-actuators/new-config-actuators.component';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-config-actuators',
  templateUrl: './config-actuators.component.html',
  styleUrls: ['./config-actuators.component.css']
})
export class ConfigActuatorsComponent implements OnInit {

  modalComponent: Type<any>;
  modalViewComponent: Type<any>;
  modalEditComponent: Type<any>;
  modalDeleteComponent: Type<any>;

  dtOptions: DataTables.Settings = {};
  data: any[] = [];
  actuatorPinTypes: any[] = [];
  cols = ['id', 'email', 'role_name'];

  constructor(
    private actuators: ActuatorsService
  ) {
    // Initialize modals for new, edit and delete
    this.modalComponent = NewConfigActuatorsComponent;
    this.modalViewComponent = ViewConfigActuatorsComponent;
    this.modalEditComponent = EditConfigActuatorsComponent;
    this.modalDeleteComponent = DeleteConfigActuatorsComponent;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      serverSide: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.actuators.getActuators(dataTablesParameters)
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

    this.getActuatorPinTypes();
  }

  getActuatorPinTypes() {
    this.actuators.getActuatorPinTypes().then(response => {
      if (!response.error) {
        // console.table(response.data);
        this.actuatorPinTypes = response.data;
      }
    });
  }

  sumPins(pins: any[]) {
    return pins.reduce((acc, curr) => {
      return acc = acc + curr.pin_count
    }, 0);
  }

}
