import { GeneralValidators } from './../../../../../../validators/general.validators';
import { UsersService } from './../../../../../../services/pages/users.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ModalsService } from './../../../../../services/layouts/modals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../provider-class';

@Component({
  selector: 'app-clear-logs',
  templateUrl: './clear-logs.component.html',
  styleUrls: ['./clear-logs.component.css']
})
export class ClearLogsComponent implements OnInit {

  form = new FormGroup({
    date: new FormControl('', GeneralValidators.required)
  });

  data: any
  constructor(
    private modal: ModalsService,
    private users: UsersService,
    private loader: LoaderService,
    public dataIn: ProviderClass
  ) { }

  ngOnInit(): void {
  }

  get date() {
    return this.form.get('date');
  }

  onSubmit() {
    let data = {
      'date': this.date?.value
    };
    this.users.clearUserLogs(data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
