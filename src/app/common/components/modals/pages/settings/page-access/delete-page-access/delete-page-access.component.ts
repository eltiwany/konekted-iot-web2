import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { SettingsService } from 'src/app/services/pages/settings.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-delete-page-access',
  templateUrl: './delete-page-access.component.html',
  styleUrls: ['./delete-page-access.component.css']
})
export class DeletePageAccessComponent implements OnInit {
  form = new FormGroup({
    pageId: new FormControl('')
  });
  data: any
  constructor(
    private modal: ModalsService,
    private settings: SettingsService,
    private loader: LoaderService,
    public dataIn: ProviderClass
  ) { }

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
      this.form.setControl('pageId', new FormControl(this.data.id));
    }
  }

  get pageId() {
    return this.form.get('pageId');
  }

  onSubmit() {
    this.settings.deletePageAccess(this.pageId?.value).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
