import { AppConfigService } from './../../../../common/services/app-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiw-mnc',
  templateUrl: './hiw-mnc.component.html',
  styleUrls: ['./hiw-mnc.component.css']
})
export class HiwMncComponent implements OnInit {

  constructor(
    public config: AppConfigService
  ) { }

  ngOnInit(): void {
  }

}
