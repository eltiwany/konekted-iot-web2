import { BoardsService } from './../../../../../../../services/iot/boards.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-delete-config-boards',
  templateUrl: './delete-config-boards.component.html',
  styleUrls: ['./delete-config-boards.component.css']
})
export class DeleteConfigBoardsComponent implements OnInit {

  form = new FormGroup({
    boardId: new FormControl('')
  });

  data: any
  constructor(
    private modal: ModalsService,
    private boardService: BoardsService,
    private loader: LoaderService,
    public dataIn: ProviderClass
  ) { }

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
      this.form.setControl('boardId', new FormControl(this.data.board.id));
    }
  }

  get boardId() {
    return this.form.get('boardId');
  }

  onSubmit() {
    this.boardService.deleteBoard(this.boardId?.value).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
