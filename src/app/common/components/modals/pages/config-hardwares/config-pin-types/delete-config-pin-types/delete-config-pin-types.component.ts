import { PinTypesService } from './../../../../../../../services/iot/pin-types.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-delete-config-pin-types',
  templateUrl: './delete-config-pin-types.component.html',
  styleUrls: ['./delete-config-pin-types.component.css']
})
export class DeleteConfigPinTypesComponent implements OnInit {

  form = new FormGroup({
    pinTypeId: new FormControl('')
  });

  data: any
  constructor(
    private modal: ModalsService,
    private pinTypes: PinTypesService,
    private loader: LoaderService,
    public dataIn: ProviderClass
  ) { }

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
      this.form.setControl('pinTypeId', new FormControl(this.data.id));
    }
  }

  get pinTypeId() {
    return this.form.get('pinTypeId');
  }

  onSubmit() {
    this.pinTypes.deletePinType(this.pinTypeId?.value).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
