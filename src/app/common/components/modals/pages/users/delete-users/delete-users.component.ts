import { UsersService } from './../../../../../../services/pages/users.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { SettingsService } from 'src/app/services/pages/settings.service';
import { ModalsService } from './../../../../../services/layouts/modals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../../provider-class';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  form = new FormGroup({
    userId: new FormControl('')
  });
  
  data: any
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
    this.users.deleteUser(this.userId?.value).then((response) => {
      if (!response.error) {
        this.modal.close();
        this.loader.refresh();
      }
    });
  }

}
