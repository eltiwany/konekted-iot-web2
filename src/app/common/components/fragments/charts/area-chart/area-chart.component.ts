import { FunctionsService } from './../../../../services/extras/functions.service';
import { Component, Input, ViewChild, OnInit } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
}

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {
  @Input() columns: any[] = [];
  @Input() sensor: any;

  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor(
    private fn: FunctionsService
  ) {}

  ngOnInit(): void {
    this.chartOptions = {
      series: this.columns,
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: true
        }
      },
      dataLabels: {
        enabled: true
      },
      title: {
        text: "Line Chart of " + this.fn.getColumnNames(this.columns),
        align: "left"
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        title: {
          text: "Time (t)"
        }
      },
      yaxis: {
        title: {
          text: this.fn.getColumnNames(this.columns)
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
  }
}
