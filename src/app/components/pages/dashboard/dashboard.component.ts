import { FunctionsService } from './../../../common/services/extras/functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  constructor(
    public fn: FunctionsService
  ) { }

  ngOnInit(): void {

  }
}
