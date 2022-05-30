import { PinTypesService } from '../../../../services/iot/pin-types.service';
import { DeleteConfigPinTypesComponent } from './../../../../common/components/modals/pages/config-hardwares/config-pin-types/delete-config-pin-types/delete-config-pin-types.component';
import { EditConfigPinTypesComponent } from './../../../../common/components/modals/pages/config-hardwares/config-pin-types/edit-config-pin-types/edit-config-pin-types.component';
import { ViewConfigPinTypesComponent } from './../../../../common/components/modals/pages/config-hardwares/config-pin-types/view-config-pin-types/view-config-pin-types.component';
import { NewConfigPinTypesComponent } from './../../../../common/components/modals/pages/config-hardwares/config-pin-types/new-config-pin-types/new-config-pin-types.component';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-config-pin-types',
  templateUrl: './config-pin-types.component.html',
  styleUrls: ['./config-pin-types.component.css']
})
export class ConfigPinTypesComponent implements OnInit {

  modalComponent: Type<any>;
  modalViewComponent: Type<any>;
  modalEditComponent: Type<any>;
  modalDeleteComponent: Type<any>;

  dtOptions: DataTables.Settings = {};
  data: any[] = [];
  cols = ['id', 'type'];

  constructor(
    private pinType: PinTypesService
  ) {
    // Initialize modals for new, edit and delete
    this.modalComponent = NewConfigPinTypesComponent;
    this.modalViewComponent = ViewConfigPinTypesComponent;
    this.modalEditComponent = EditConfigPinTypesComponent;
    this.modalDeleteComponent = DeleteConfigPinTypesComponent;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      serverSide: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.pinType.getPinTypes(dataTablesParameters)
          .then(response => {
              // console.log(response.data);

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
        { data: 'type' },
        { data: '', orderable: false}
      ],
      responsive: true
    };
  }

}
