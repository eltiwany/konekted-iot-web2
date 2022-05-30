import { MncHardwaresModule } from './../../components/pages/mnc-hardwares/mnc-hardwares.module';
import { LinkHardwaresModule } from './../components/modals/pages/link-hardwares/link-hardwares.module';
import { ConfigHardwaresModule } from './../components/modals/pages/config-hardwares/config-hardwares.module';
import { SystemPreferencesModule } from './../../components/pages/system-preferences/system-preferences.module';
import { FragmentsModule } from './../components/fragments/fragments.module';
import { ModalsModule } from './../components/modals/modals.module';
import { SettingsModule } from './../../components/pages/settings/settings.module';
import { PagesModule } from './../../components/pages/pages.module';
import { WebsiteModule } from './../../components/website/website.module';
import { LayoutsModule } from './../components/layouts/layouts.module';
import { AuthModule } from './../../components/auth/auth.module';
import { NgModule } from '@angular/core';
import { SettingsCommonModule } from '../components/modals/pages/settings/settings-common.module';
import { MyAreaModule } from 'src/app/components/pages/my-area/my-area.module';



@NgModule({
  declarations: [],
  exports: [
    AuthModule,
    LayoutsModule,
    FragmentsModule,
    WebsiteModule,
    PagesModule,
    SettingsModule,
    SettingsCommonModule,
    ModalsModule,
    MyAreaModule,
    SystemPreferencesModule,
    ConfigHardwaresModule,
    LinkHardwaresModule,
    MncHardwaresModule
  ],
  providers: [
    LayoutsModule
  ]
})
export class ExtensionModule { }
