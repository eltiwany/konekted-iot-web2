import { FunctionsService } from './../../../../common/services/extras/functions.service';
import { AutomationsService } from './../../../../services/iot/automations.service';
import { DeleteAutomationsComponent } from './../../../../common/components/modals/pages/automations/delete-automations/delete-automations.component';
import { EditAutomationsComponent } from './../../../../common/components/modals/pages/automations/edit-automations/edit-automations.component';
import { ViewAutomationsComponent } from './../../../../common/components/modals/pages/automations/view-automations/view-automations.component';
import { NewAutomationsComponent } from './../../../../common/components/modals/pages/automations/new-automations/new-automations.component';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-automate-hardwares',
  templateUrl: './automate-hardwares.component.html',
  styleUrls: ['./automate-hardwares.component.css']
})
export class AutomateHardwaresComponent implements OnInit {

  modalComponent: Type<any>;
  modalViewComponent: Type<any>;
  modalEditComponent: Type<any>;
  modalDeleteComponent: Type<any>;

  dtOptions: DataTables.Settings = {};
  data: any[] = [];
  cols = ['id', 'type'];

  constructor(
    private automation: AutomationsService,
    public fn: FunctionsService
  ) {
    // Initialize modals for new, edit and delete
    this.modalComponent = NewAutomationsComponent;
    this.modalViewComponent = ViewAutomationsComponent;
    this.modalEditComponent = EditAutomationsComponent;
    this.modalDeleteComponent = DeleteAutomationsComponent;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      serverSide: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.automation.getAutomations(dataTablesParameters)
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
        { data: 'sensor_name' },
        { data: 'sensor_column' },
        { data: 'comparison_operation' },
        { data: 'value' },
        { data: 'actuator_name' },
        { data: 'is_switched_on' },
        { data: '', orderable: false}
      ],
      responsive: true
    };
  }

}
