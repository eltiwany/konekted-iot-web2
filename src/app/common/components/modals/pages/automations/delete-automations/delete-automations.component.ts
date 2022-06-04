import { AutomationsService } from './../../../../../../services/iot/automations.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../services/layouts/modals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../provider-class';

@Component({
  selector: 'app-delete-automations',
  templateUrl: './delete-automations.component.html',
  styleUrls: ['./delete-automations.component.css']
})
export class DeleteAutomationsComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl('')
  });

  data: any
  constructor(
    private modal: ModalsService,
    private automationsService: AutomationsService,
    private loader: LoaderService,
    public dataIn: ProviderClass
  ) { }

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
      this.form.setControl('id', new FormControl(this.data.id));
    }
  }

  get id() {
    return this.form.get('id');
  }

  onSubmit() {
    this.automationsService.deleteAutomation(this.id?.value).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
