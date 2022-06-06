import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { MyCommonModule } from 'src/app/common/common.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MyCommonModule
  ],
  exports: [
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
