import { AppConfigService } from './../../../../../../services/app-config.service';
import { BoardsService } from './../../../../../../../services/iot/boards.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { LoaderService } from './../../../../../../services/extras/loader.service';
import { GeneralValidators } from './../../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { SensorsService } from './../../../../../../../services/iot/sensors.service';
import { ApiService } from './../../../../../../services/api/api.service';
import { FunctionsService } from './../../../../../../services/extras/functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-sensors',
  templateUrl: './new-sensors.component.html',
  styleUrls: ['./new-sensors.component.css']
})
export class NewSensorsComponent implements OnInit {

  data: any;
  activeBoard: any;
  datum: any;
  rows: any[] = [];
  connections: any[] = []

  constructor(
    public fn: FunctionsService,
    private sensorsService: SensorsService,
    private boardsService: BoardsService,
    public api: ApiService,
    public loader: LoaderService,
    public modal: ModalsService,
    public config: AppConfigService
  ) {}

  form = new FormGroup({
    'sensorId': new FormControl('', [GeneralValidators.required]),
    'name': new FormControl('', [GeneralValidators.required]),
    'interval': new FormControl('', [GeneralValidators.required]),
  });

  get sensorId() {
    return this.form.get('sensorId');
  }

  get name() {
    return this.form.get('name');
  }

  get interval() {
    return this.form.get('interval');
  }

  ngOnInit(): void {
    this.getSensors();
    this.getActiveBoard();
    console.log(this.datum);

  }

  addPin(index: number) {
    const id = this.rows.length;
    this.form.setControl('floatingSensorPin' + id, new FormControl({ value: this.datum[0].pins[index].id, disabled: true }));
    this.form.setControl('floatingBoardPin' + id, new FormControl(this.activeBoard.pins[0].id));

    // this.connections = this.connections.filter(pin => pin.id != id);
    this.connections.push(
      {
        id: id,
        sensorPinId: this.datum[0].pins[index].id,
        boardPinId: this.activeBoard.pins[0].id,
      }
    );
    // console.table(this.connections);
    this.rows.push(Math.random());
  }

  changePin(id: number) {
    let modifiedConnection = this.connections.filter(pin => pin.id == id)[0];
    modifiedConnection.boardPinId = this.form.get('floatingBoardPin' + id)?.value;
    this.connections = this.connections.filter(pin => pin.id != id);
    this.connections.push(modifiedConnection);
    // console.table(this.connections);
  }

  getSensors() {
    this.sensorsService.getSensorsUnfiltered().then((response) => {
      if (!response.error) {
        this.data = response.data;
      }
    });
  }

  getActiveBoard() {
    this.boardsService.getUserBoards().then((response) => {
      if (!response.error)
        this.activeBoard = response.data[0];
      // console.table(this.activeBoard);
    });
  }

  previewSensor() {
    this.rows = [];
    this.connections = [];
    this.datum = (this.data as []).filter((datum: any) => datum.sensor.id == this.sensorId?.value);
    // Loading rows
    if (this.datum.length == 1 && this.activeBoard)
      (this.datum[0].pins as []).forEach((pin, index) => this.addPin(index));
  }

  filterPins(pins: any[], pinType: string) {
    return pins.filter(pin => pin.pin_type == pinType);
  }

  onSubmit = (): void => {
    const data = {
      sensorId: this.sensorId?.value,
      userBoardId: this.activeBoard.board.id,
      name: this.name?.value,
      interval: this.interval?.value,
      connections: this.connections
    };

    this.sensorsService.newUserSensor(data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
