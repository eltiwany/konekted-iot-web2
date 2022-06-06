import { AppConfigService } from './../../../../common/services/app-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiw-connect',
  templateUrl: './hiw-connect.component.html',
  styleUrls: ['./hiw-connect.component.css']
})
export class HiwConnectComponent implements OnInit {

  constructor(
    public config: AppConfigService
  ) { }

  ngOnInit(): void {
  }

}
