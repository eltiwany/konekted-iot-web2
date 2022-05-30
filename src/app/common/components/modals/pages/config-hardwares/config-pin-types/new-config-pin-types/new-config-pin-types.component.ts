import { PinTypesService } from './../../../../../../../services/iot/pin-types.service';
import { FunctionsService } from './../../../../../../services/extras/functions.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { GeneralValidators } from './../../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-config-pin-types',
  templateUrl: './new-config-pin-types.component.html',
  styleUrls: ['./new-config-pin-types.component.css']
})
export class NewConfigPinTypesComponent implements OnInit {

  constructor(
    private modal: ModalsService,
    private pinTypes: PinTypesService,
    private loader: LoaderService,
    public fn: FunctionsService
  ) {}

  form = new FormGroup({
    'type': new FormControl('', [GeneralValidators.required]),
  });

  get type() {
    return this.form.get('type');
  }

  ngOnInit(): void {
  }

  onSubmit = (): void => {
    const data = {
      type: this.type?.value,
    };

    this.pinTypes.newPinType(data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
