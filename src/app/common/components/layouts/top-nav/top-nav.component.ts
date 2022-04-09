import { CommonAuthService } from './../../../services/common-auth.service';
import { ToggleService } from './../../../services/extras/toggle.service';
import { AuthService } from './../../../../services/auth/auth.service';
import { AppConfigService } from './../../../services/app-config.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],

})
export class TopNavComponent implements OnInit {

  constructor(
    public config: AppConfigService,
    public toggle: ToggleService,
    public auth: AuthService,
    public commonAuth: CommonAuthService
  ) { }

  ngOnInit(): void {

  }

}
