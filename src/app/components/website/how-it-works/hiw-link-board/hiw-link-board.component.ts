import { AppConfigService } from './../../../../common/services/app-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiw-link-board',
  templateUrl: './hiw-link-board.component.html',
  styleUrls: ['./hiw-link-board.component.css']
})
export class HiwLinkBoardComponent implements OnInit {

  constructor(
    public config: AppConfigService
  ) { }

  ngOnInit(): void {
  }

}
