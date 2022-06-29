import { ActuatorsService } from './../../../../../../services/iot/actuators.service';
import { FunctionsService } from './../../../../../services/extras/functions.service';
import { LoaderService } from './../../../../../services/extras/loader.service';
import { ModalsService } from './../../../../../services/layouts/modals.service';
import { AutomationsService } from './../../../../../../services/iot/automations.service';
import { GeneralValidators } from './../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { SensorsService } from './../../../../../../services/iot/sensors.service';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../provider-class';

@Component({
  selector: 'app-view-automations',
  templateUrl: './view-automations.component.html',
  styleUrls: ['./view-automations.component.css']
})
export class ViewAutomationsComponent implements OnInit {

  userSensors: any[] = [];
  userActuators: any[] = [];
  sensorColumns: any[] = [];
  data: any;

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
    private loader: LoaderService,
    private dataIn: ProviderClass
  ) { }

  form = new FormGroup({
    'userSensor': new FormControl(),
    'sensorColumn': new FormControl(),
    'comparisonOperation': new FormControl(),
    'value': new FormControl(),
    'userActuator': new FormControl(),
    'isSwitchedOn': new FormControl(),
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
    if (this.dataIn) {
      this.data = this.dataIn;

      this.getUserSensors();
      this.getUserActuators();

      this.form.setControl('userSensor', new FormControl({value: this.data.sensor_id, disabled: true}, [GeneralValidators.required, GeneralValidators.isNot(this.selectors.userSensor)]));
      this.form.setControl('sensorColumn', new FormControl({value: this.data.column_id, disabled: true}, [GeneralValidators.required, GeneralValidators.isNot(this.selectors.sensorColumn)]));
      this.form.setControl('comparisonOperation', new FormControl({value: this.data.comparison_operation, disabled: true}, [GeneralValidators.required]));
      this.form.setControl('value', new FormControl({value: this.data.value, disabled: true}, [GeneralValidators.required]));
      this.form.setControl('userActuator', new FormControl({value: this.data.actuator_id, disabled: true}, [GeneralValidators.required, GeneralValidators.isNot(this.selectors.userActuator)]));
      this.form.setControl('isSwitchedOn', new FormControl({value: this.data.is_switched_on, disabled: true}, [GeneralValidators.required]));

    }
  }

  getUserSensors() {
    this.userSensorService.getUserSensors().then((response: any) => {
      if (!response.error) {
        this.userSensors = response.data;
        this.getSensorColumns(this.data.sensor_id);
      }
    }).finally(
      // () => console.log(this.userSensors)
    );
  }

  getSensorColumns(sensorId: any) {
    if (isNaN(sensorId))
      sensorId = sensorId?.value;

    this.userSensors.forEach((value) => {
      if (value.sensor.id == sensorId) {
        this.sensorColumns = value.columns;
      }
    });
  }

  getUserActuators() {
    this.userActuatorService.getUserActuators().then((response: any) => {
      if (!response.error)
        this.userActuators = response.data;
    }).finally(
      // () => console.log(this.userActuators)
      () => { this.setUserActuator(this.userActuator?.value) }
    );
  }

  setUserActuator(userActuatorId: number) {
    let userActuatorTmp = this.userActuators.filter((userActuator) => userActuator.actuator.id == userActuatorId);
    // console.log(userActuatorTmp[0]);
    this.form.setControl('userActuator', new FormControl({value: userActuatorTmp[0], disabled: true}, [GeneralValidators.required, GeneralValidators.isNot(this.selectors.userActuator)]));

  }

}
