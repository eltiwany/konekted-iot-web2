import { FunctionsService } from './../../../../services/extras/functions.service';
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  labels: any[] = [];
  series: any[] = [];

  @Input() columns: any[] = [];
  @Input() sensor: any;

  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor(
    private fn: FunctionsService
  ) {}

  ngOnInit(): void {

    this.columns.forEach((column) => {
      this.labels.push(column.name);
      if (column.data.length > 0)
        this.series.push((column.data as []).reduce((acc, curr) => acc + curr, 0) / column.data.length);
      else
        this.series.push(0);
    })

    let total = this.series.reduce((acc, curr) => acc + curr, 0);
    let seriesPercent: any[] = [];
    this.series.forEach((s) => {
      seriesPercent.push((s / total) * 100);
    });

    this.chartOptions = {
      series: seriesPercent,
      chart: {
        type: "donut"
      },
      labels: this.labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
