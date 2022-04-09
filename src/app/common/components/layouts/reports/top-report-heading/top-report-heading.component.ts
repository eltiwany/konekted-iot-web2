import { ApiService } from './../../../../services/api/api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-report-heading',
  templateUrl: './top-report-heading.component.html',
  styleUrls: ['./top-report-heading.component.css']
})
export class TopReportHeadingComponent implements OnInit {
  @Input() heading = "";
  @Input() subheading = "";
  @Input() logo = "";
  @Input() personalEmoluments = false;

  constructor(
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }

}
