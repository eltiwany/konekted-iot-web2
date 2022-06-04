import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-selector',
  templateUrl: './chart-selector.component.html',
  styleUrls: ['./chart-selector.component.css']
})
export class ChartSelectorComponent implements OnInit {
  columns: any[] = [];
  sensors: any;
  @Input() rootColumns: any;
  @Input() rootSensor: any;

  form = new FormGroup({
    'chartOption': new FormControl('line'),
  });

  constructor() { }

  get chartOption() {
    return this.form.get('chartOption');
  }

  ngOnInit(): void {

    if(this.rootColumns)
      this.columns = this.rootColumns;

    if(this.rootSensor)
      this.sensors = this.rootSensor;

    console.log(this.columns, this.sensors);

  }

}
