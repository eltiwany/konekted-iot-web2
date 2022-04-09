import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { GeneralValidators } from './../../../../../../../validators/general.validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/pages/settings.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-page-access',
  templateUrl: './new-page-access.component.html',
  styleUrls: ['./new-page-access.component.css']
})
export class NewPageAccessComponent implements OnInit {
  constructor(
    private modal: ModalsService,
    private settings: SettingsService,
    private loader: LoaderService
  ) { }

  form = new FormGroup({
    'pageName': new FormControl('', [GeneralValidators.required]),
  });

  get pageName() {
    return this.form.get('pageName');
  }


  ngOnInit(): void {
  }

  onSubmit = (): void => {
    const data = {
      pageName: this.pageName?.value,
    };
    this.settings.newPageAccess(data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
