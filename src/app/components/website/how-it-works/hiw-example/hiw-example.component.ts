import { AppConfigService } from './../../../../common/services/app-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiw-example',
  templateUrl: './hiw-example.component.html',
  styleUrls: ['./hiw-example.component.css']
})
export class HiwExampleComponent implements OnInit {

  constructor(
    public config: AppConfigService,
  ) { }

  ngOnInit(): void {
  }

}
