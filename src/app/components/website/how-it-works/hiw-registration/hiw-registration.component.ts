import { AppConfigService } from './../../../../common/services/app-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiw-registration',
  templateUrl: './hiw-registration.component.html',
  styleUrls: ['./hiw-registration.component.css']
})
export class HiwRegistrationComponent implements OnInit {

  constructor(
    public config: AppConfigService,
  ) { }

  ngOnInit(): void {
  }

}
