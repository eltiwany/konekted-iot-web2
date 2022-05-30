import { TokenInterceptorService } from './services/token-interceptor.service';
import { PreloaderComponent } from './components/pages/preloader/preloader.component';
import { NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ExtensionModule } from './common/extension/extension.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { MyCommonModule } from './common/common.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/de';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PreloaderComponent
  ],
  imports: [
    AppRoutingModule,
    MyCommonModule,
    ExtensionModule,
    LoadingBarModule,
    ToastrModule.forRoot(),
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgApexchartsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-US', // 'de-DE' for Germany, 'fr-FR' for France ...

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
