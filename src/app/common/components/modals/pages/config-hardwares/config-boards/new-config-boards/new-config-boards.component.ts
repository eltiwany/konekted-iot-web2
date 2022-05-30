import { AppConfigService } from './../../../../../../services/app-config.service';
import { ApiService } from './../../../../../../services/api/api.service';
import { AlertService } from './../../../../../../services/extras/alert.service';
import { BoardsService } from './../../../../../../../services/iot/boards.service';
import { PinTypesService } from './../../../../../../../services/iot/pin-types.service';
import { FunctionsService } from './../../../../../../services/extras/functions.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { GeneralValidators } from './../../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-config-boards',
  templateUrl: './new-config-boards.component.html',
  styleUrls: ['./new-config-boards.component.css']
})
export class NewConfigBoardsComponent implements OnInit {

  imageFile: {link: string, file: any, name: string} = {link: "", file: undefined, name: ""};
  pinTypes: any[] = [];
  boardPins: any[] = [];
  rows: any[] = [];

  constructor(
    private modal: ModalsService,
    private boardService: BoardsService,
    private pinType: PinTypesService,
    private loader: LoaderService,
    public fn: FunctionsService,
    private alert: AlertService,
    public api: ApiService,
    public config: AppConfigService
  ) {}

  form = new FormGroup({
    'name': new FormControl('', [GeneralValidators.required]),
    'description': new FormControl('', [GeneralValidators.required]),
  });

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  ngOnInit(): void {
    this.getPinTypes();
    for (let i = 0; i < 3; i++)
      this.addPin();
  }

  addPin() {
    this.form.setControl('floatingpinType' + (this.rows.length), new FormControl(1));
    this.form.setControl('floatingpinNumber' + (this.rows.length), new FormControl(''));
    this.form.setControl('floatingremarks' + (this.rows.length), new FormControl(''));
    this.rows.push(Math.random());
  }

  removePin(id: number) {
    this.boardPins = this.boardPins.filter((pin, index) => index != id);
    this.rows = this.rows.filter((row, index) => index != id);
  }

  addRow(id: number, _pinType: string, _pinNumber: string, _remarks: string) {
    const pinType = this.form.get(_pinType)?.value;
    const pinNumber = this.form.get(_pinNumber)?.value;
    const remarks = this.form.get(_remarks)?.value;

    this.boardPins = this.boardPins.filter(pin => pin.id != id);
    this.boardPins.push(
      {
        id: id,
        pinType: pinType,
        pinNumber: pinNumber,
        remarks: remarks
      }
    );
    // console.clear();
    // console.table(this.boardPins);
  }

  getPinTypes() {
    return this.pinType.getPinTypesUnfiltered().then((response) => {
      if (!response.error) {
        this.pinTypes = response.data;
      }
    });
  }

  imagesPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      let extension = event.target.files[0].type.split('/').pop().toLowerCase();
      let size = event.target.files[0].size;

      if (
        extension == "jpeg" ||
        extension == "jpg"  ||
        extension == "png"  ||
        extension == "bmp"  ||
        extension == "gif"  ||
        extension == "svg"  ||
        extension == "svg+xml"
      ) {
        if (size < 1000000) {
          const reader = new FileReader();
          reader.onload = (_event: any) => {
            // console.log(event.srcElement.files[0]);

              this.imageFile = {
                  link: _event.target.result,
                  file: event.srcElement.files[0],
                  name: event.srcElement.files[0].name
              };
          };
          reader.readAsDataURL(event.target.files[0]);
        }else
          this.alert.showError('Logo should not exceed 1MB in size!');
      }else
        this.alert.showError('Only Images are Allowed!');
    }
  }

  onSubmit = (): void => {
    const formData = new FormData();
    formData.append('imageUrl', this.imageFile.file);
    formData.append('boardPins', JSON.stringify(this.boardPins));
    formData.append('name', this.name?.value);
    formData.append('description', this.description?.value);

    this.boardService.newBoard(formData).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
