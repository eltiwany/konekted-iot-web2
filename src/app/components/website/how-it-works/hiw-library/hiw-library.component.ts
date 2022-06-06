import { AppConfigService } from './../../../../common/services/app-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiw-library',
  templateUrl: './hiw-library.component.html',
  styleUrls: ['./hiw-library.component.css']
})
export class HiwLibraryComponent implements OnInit {

  constructor(
    public config: AppConfigService
  ) { }

  ngOnInit(): void {
  }

}
