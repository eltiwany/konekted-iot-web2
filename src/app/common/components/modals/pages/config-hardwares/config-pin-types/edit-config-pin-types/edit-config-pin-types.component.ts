import { PinTypesService } from './../../../../../../../services/iot/pin-types.service';
import { FunctionsService } from './../../../../../../services/extras/functions.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { GeneralValidators } from './../../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-edit-config-pin-types',
  templateUrl: './edit-config-pin-types.component.html',
  styleUrls: ['./edit-config-pin-types.component.css']
})
export class EditConfigPinTypesComponent implements OnInit {

  data: any;

  constructor(
    private modal: ModalsService,
    private pinTypes: PinTypesService,
    private loader: LoaderService,
    public fn: FunctionsService,
    private dataIn: ProviderClass
  ) {}

  form = new FormGroup({
    'type': new FormControl('', [GeneralValidators.required]),
  });

  get type() {
    return this.form.get('type');
  }

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
      this.form.setControl('type', new FormControl(this.data.type, [GeneralValidators.required]));
    }
  }

  onSubmit = (): void => {
    const data = {
      type: this.type?.value,
    };

    this.pinTypes.updatePinType(this.data.id, data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
