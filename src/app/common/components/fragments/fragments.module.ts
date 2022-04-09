import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMd4Component } from './card-md4/card-md4.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';



@NgModule({
  declarations: [
    CardMd4Component,
    SimpleTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardMd4Component,
    SimpleTableComponent
  ]
})
export class FragmentsModule { }
