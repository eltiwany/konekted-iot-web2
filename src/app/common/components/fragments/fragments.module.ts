import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMd4Component } from './card-md4/card-md4.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ChartSelectorComponent } from './charts/chart-selector/chart-selector.component';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { ColumnChartComponent } from './charts/column-chart/column-chart.component';



@NgModule({
  declarations: [
    CardMd4Component,
    SimpleTableComponent,
    LineChartComponent,
    PieChartComponent,
    ChartSelectorComponent,
    AreaChartComponent,
    ColumnChartComponent,
  ],
  imports: [
    DataTablesModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    NgApexchartsModule
  ],
  exports: [
    CardMd4Component,
    SimpleTableComponent,
    ChartSelectorComponent,
    LineChartComponent
  ]
})
export class FragmentsModule { }
