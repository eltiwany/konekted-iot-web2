import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { SettingsService } from 'src/app/services/pages/settings.service';
import { ModalsService } from './../../../../../../services/layouts/modals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../../provider-class';

@Component({
  selector: 'app-delete-roles',
  templateUrl: './delete-roles.component.html',
  styleUrls: ['./delete-roles.component.css']
})
export class DeleteRolesComponent implements OnInit {

  form = new FormGroup({
    roleId: new FormControl('')
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
      this.form.setControl('roleId', new FormControl(this.data.id));
    }
  }

  get roleId() {
    return this.form.get('roleId');
  }

  onSubmit() {
    this.settings.deleteRole(this.roleId?.value).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }
}
