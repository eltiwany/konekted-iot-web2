import { AutomationsService } from './../../../services/iot/automations.service';
import { UserBoardsService } from './../../../services/iot/user-boards.service';
import { FunctionsService } from './../../../common/services/extras/functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  automationData: any[] = [];
  dtOptions: DataTables.Settings = {};


  reportsWithNumbersColumns = [
    {
      bgColor: 'info',
      textColor: 'white',
      iconName: 'cpu-fill',
      allDataUrl: '/hardwares/boards'
    },
    {
      bgColor: 'warning',
      textColor: 'dark',
      iconName: 'thermometer-sun',
      allDataUrl: '/hardwares/sensors'
    },
    {
      bgColor: 'success',
      textColor: 'white',
      iconName: 'lightbulb',
      allDataUrl: '/hardwares/actuators'
    },
  ];

  constructor(
    public fn: FunctionsService,
    private automation: AutomationsService,
    private userBoard: UserBoardsService
  ) { }

  ngOnInit(): void {
    this.userBoard.getStats().then((response) => {
      if (!response.error)
        this.data = response.data;

      let newData: any[] = [];
      this.data.forEach((datum, index) => {
        newData.push([datum, this.reportsWithNumbersColumns[index]]);
      });

      this.data = newData;

    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      serverSide: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.automation.getAutomations(dataTablesParameters)
          .then(response => {
              // console.log(response.data);

              this.automationData = response.data;
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
      ],
      responsive: true
    };

  }
}
