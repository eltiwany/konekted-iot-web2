import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { LoaderService } from './../../../../../../services/extras/loader.service';
import { GeneralValidators } from './../../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { BoardsService } from './../../../../../../../services/iot/boards.service';
import { ApiService } from './../../../../../../services/api/api.service';
import { FunctionsService } from './../../../../../../services/extras/functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-boards',
  templateUrl: './new-boards.component.html',
  styleUrls: ['./new-boards.component.css']
})
export class NewBoardsComponent implements OnInit {

  data: any;
  datum: any;

  constructor(
    public fn: FunctionsService,
    private boardsService: BoardsService,
    public api: ApiService,
    public loader: LoaderService,
    public modal: ModalsService
  ) {}

  form = new FormGroup({
    'boardId': new FormControl('', [GeneralValidators.required]),
  });

  get boardId() {
    return this.form.get('boardId');
  }

  ngOnInit(): void {
    this.getBoards();
  }

  getBoards() {
    return this.boardsService.getBoardsUnfiltered().then((response) => {
      if (!response.error) {
        this.data = response.data;
      }
    });
  }

  previewBoard() {
    this.datum = (this.data as []).filter((datum: any) => datum.board.id == this.boardId?.value);
  }

  filterPins(pins: any[], pinType: string) {
    return pins.filter(pin => pin.pin_type == pinType);
  }

  onSubmit = (): void => {
    const data = {
      boardId: this.boardId?.value,
      token: this.fn.generateString(16)
    };

    this.boardsService.newUserBoard(data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
