import { AppConfigService } from './../../../services/app-config.service';
import { FunctionsService } from './../../../services/extras/functions.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css']
})
export class SimpleTableComponent implements OnInit {
  @Input() cardName: any = "Card Name";
  @Input() allDataUrl: any = "";
  @Input() columns: any[] = [];
  @Input() data: any[] = [];

  constructor(
    public fn: FunctionsService,
    public config: AppConfigService
  ) { }

  ngOnInit(): void {
  }

}
