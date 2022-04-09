import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { GeneralValidators } from './../../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/pages/settings.service';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-edit-page-access',
  templateUrl: './edit-page-access.component.html',
  styleUrls: ['./edit-page-access.component.css']
})

export class EditPageAccessComponent implements OnInit {
  data: any = [];
  form = new FormGroup({
    'pageName': new FormControl(),
  });

  constructor(
    private modal: ModalsService,
    private settings: SettingsService,
    private loader: LoaderService,
    public dataIn: ProviderClass
    ) { }


  get pageName() {
    return this.form.get('pageName');
  }

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
      this.form.setControl('pageName', new FormControl(this.data.name, [GeneralValidators.required]));
    }
  }

  onSubmit = (): void => {
    const id: any = this.data.id;
    const data = {
      pageName: this.pageName?.value,
    };
    this.settings.updatePageAccess(id, data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
