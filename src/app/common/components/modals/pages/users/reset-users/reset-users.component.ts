import { UsersService } from './../../../../../../services/pages/users.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { SettingsService } from 'src/app/services/pages/settings.service';
import { ModalsService } from './../../../../../services/layouts/modals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../provider-class';

@Component({
  selector: 'app-reset-users',
  templateUrl: './reset-users.component.html',
  styleUrls: ['./reset-users.component.css']
})
export class ResetUsersComponent implements OnInit {
  form = new FormGroup({
    userId: new FormControl('')
  });
  data: any;
  
  constructor(
    private modal: ModalsService,
    private users: UsersService,
    private loader: LoaderService,
    public dataIn: ProviderClass
  ) { }

  ngOnInit(): void {
    if (this.dataIn) {
      this.data = this.dataIn;
      this.form.setControl('userId', new FormControl(this.data.id));
    }
  }

  get userId() {
    return this.form.get('userId');
  }

  onSubmit() {
    const data = {
      userId: this.userId?.value
    }

    this.users.resetPassword(data).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }
}
