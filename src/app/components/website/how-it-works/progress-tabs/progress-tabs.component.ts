import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-tabs',
  templateUrl: './progress-tabs.component.html',
  styleUrls: ['./progress-tabs.component.css']
})
export class ProgressTabsComponent implements OnInit {
  @Input() active: string = "example";
  constructor() { }

  ngOnInit(): void {
  }

}
