import { IconsService } from './../../../common/services/extras/icons.service';
import { ApiService } from './../../../common/services/api/api.service';
import { PreferencesService } from './../../../common/services/preferences.service';
import { AppConfigService } from './../../../common/services/app-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isDescriptionOpen: boolean = false;
  constructor(
    public config: AppConfigService
  ) { }

  ngOnInit(): void {
  }

  toggleDescription() {
    this.isDescriptionOpen = !this.isDescriptionOpen;
  }

}
