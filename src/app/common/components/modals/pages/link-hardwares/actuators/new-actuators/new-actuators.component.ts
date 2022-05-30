import { AppConfigService } from './../../../../../../services/app-config.service';
import { BoardsService } from './../../../../../../../services/iot/boards.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { LoaderService } from './../../../../../../services/extras/loader.service';
import { GeneralValidators } from './../../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { ActuatorsService } from './../../../../../../../services/iot/actuators.service';
import { ApiService } from './../../../../../../services/api/api.service';
import { FunctionsService } from './../../../../../../services/extras/functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-actuators',
  templateUrl: './new-actuators.component.html',
  styleUrls: ['./new-actuators.component.css']
})
export class NewActuatorsComponent implements OnInit {

  data: any;
  activeBoard: any;
  datum: any;
  rows: any[] = [];
  connections: any[] = []

  constructor(
    public fn: FunctionsService,
    private actuatorsService: ActuatorsService,
    private boardsService: BoardsService,
    public api: ApiService,
    public loader: LoaderService,
    public modal: ModalsService,
    public config: AppConfigService
  ) {}

  form = new FormGroup({
    'actuatorId': new FormControl('', [GeneralValidators.required]),
    'name': new FormControl('', [GeneralValidators.required]),
  });

  get actuatorId() {
    return this.form.get('actuatorId');
  }

  get name() {
    return this.form.get('name');
  }

  ngOnInit(): void {
    this.getActuators();
    this.getActiveBoard();
  }

  addPin(index: number) {
    const id = this.rows.length;
    this.form.setControl('floatingActuatorPin' + id, new FormControl({ value: this.datum[0].pins[index].id, disabled: true }));
    this.form.setControl('floatingBoardPin' + id, new FormControl(this.activeBoard.pins[0].id));

    // this.connections = this.connections.filter(pin => pin.id != id);
    this.connections.push(
      {
        id: id,
        actuatorPinId: this.datum[0].pins[index].id,
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

  getActuators() {
    this.actuatorsService.getActuatorsUnfiltered().then((response) => {
      if (!response.error) {
        this.data = response.data;
      }
    });
  }

  getActiveBoard() {
    this.boardsService.getUserBoards().then((response) => {
      if (!response.error)
        this.activeBoard = response.data[0];
    });
  }

  previewActuator() {
    this.rows = [];
    this.connections = [];
    this.datum = (this.data as []).filter((datum: any) => datum.actuator.id == this.actuatorId?.value);
    // Loading rows
    if (this.datum.length == 1 && this.activeBoard)
      (this.datum[0].pins as []).forEach((pin, index) => this.addPin(index));
  }

  filterPins(pins: any[], pinType: string) {
    return pins.filter(pin => pin.pin_type == pinType);
  }

  onSubmit = (): void => {
    const data = {
      actuatorId: this.actuatorId?.value,
      name: this.name?.value,
      userBoardId: this.activeBoard.board.id,
      connections: this.connections
    };

    this.actuatorsService.newUserActuator(data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
