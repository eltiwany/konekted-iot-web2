import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { TopReportHeadingComponent } from './reports/top-report-heading/top-report-heading.component';

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    FooterComponent,
    TopBarComponent,
    ActionButtonsComponent,
    TopReportHeadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TopNavComponent,
    SideNavComponent,
    FooterComponent,
    TopBarComponent,
    ActionButtonsComponent,
    TopReportHeadingComponent
  ],
})
export class LayoutsModule { }
