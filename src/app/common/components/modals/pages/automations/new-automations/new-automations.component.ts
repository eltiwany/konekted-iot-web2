import { ActuatorsService } from './../../../../../../services/iot/actuators.service';
import { FunctionsService } from './../../../../../services/extras/functions.service';
import { LoaderService } from './../../../../../services/extras/loader.service';
import { ModalsService } from './../../../../../services/layouts/modals.service';
import { AutomationsService } from './../../../../../../services/iot/automations.service';
import { GeneralValidators } from './../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { SensorsService } from './../../../../../../services/iot/sensors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-automations',
  templateUrl: './new-automations.component.html',
  styleUrls: ['./new-automations.component.css']
})
export class NewAutomationsComponent implements OnInit {
  userSensors: any[] = [];
  userActuators: any[] = [];
  sensorColumns: any[] = [];

  selectors = {
    userSensor: '-- Select Sensor --',
    userActuator: '-- Select Actuator --',
    sensorColumn: '-- Select Column / Expected Result --',
  }

  constructor(
    public fn: FunctionsService,
    private userSensorService: SensorsService,
    private userActuatorService: ActuatorsService,
    private automationsService: AutomationsService,
    private modal: ModalsService,
    private loader: LoaderService
  ) { }

  form = new FormGroup({
    'userSensor': new FormControl(this.selectors.userSensor, [GeneralValidators.required, GeneralValidators.isNot(this.selectors.userSensor)]),
    'sensorColumn': new FormControl(this.selectors.sensorColumn, [GeneralValidators.required, GeneralValidators.isNot(this.selectors.sensorColumn)]),
    'comparisonOperation': new FormControl('E', [GeneralValidators.required]),
    'value': new FormControl('', [GeneralValidators.required]),
    'userActuator': new FormControl(this.selectors.userActuator, [GeneralValidators.required, GeneralValidators.isNot(this.selectors.userActuator)]),
    'isSwitchedOn': new FormControl(1, [GeneralValidators.required]),
  });

  get userSensor() {
    return this.form.get('userSensor');
  }

  get sensorColumn() {
    return this.form.get('sensorColumn');
  }

  get comparisonOperation() {
    return this.form.get('comparisonOperation');
  }

  get value() {
    return this.form.get('value');
  }

  get userActuator() {
    return this.form.get('userActuator');
  }

  get isSwitchedOn() {
    return this.form.get('isSwitchedOn');
  }

  ngOnInit(): void {
    this.getUserSensors();
  }

  getUserSensors() {
    this.userSensorService.getUserSensors().then((response: any) => {
      if (!response.error)
        this.userSensors = response.data;
    }).finally(
      // () => console.log(this.userSensors)
    );
  }

  getUserActuators() {
    this.userActuatorService.getUserActuators().then((response: any) => {
      if (!response.error)
        this.userActuators = response.data;
    }).finally(
      // () => console.log(this.userActuators)
    );
  }

  getSensorColumns() {
    if (this.userSensor?.value) {
      if (this.userActuators.length == 0)
        this.getUserActuators();
      this.sensorColumns = this.userSensor.value.columns;
    }
  }

  onSubmit = (): void => {
    const data = {
      userSensorId: this.userSensor?.value.sensor.id,
      sensorColumnId: this.sensorColumn?.value,
      comparisonOperation: this.comparisonOperation?.value,
      value: this.value?.value,
      userActuatorId: this.userActuator?.value.actuator.id,
      isSwitchedOn: this.isSwitchedOn?.value,
    };
    // console.log(data);

    this.automationsService.newAutomation(data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
