import { NewBoardsComponent } from './../../modals/pages/link-hardwares/boards/new-boards/new-boards.component';
import { PermissionsGuardService } from './../../../../services/guards/permissions-guard.service';
import { Router } from '@angular/router';
import { CommonAuthService } from './../../../services/common-auth.service';
import { AppConfigService } from './../../../services/app-config.service';
import { ToggleService } from './../../../services/extras/toggle.service';
import { AuthService } from './../../../../services/auth/auth.service';
import { Component, OnInit, Type } from '@angular/core';
import { VERSION } from '../../../../../environments/version';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  boardName: string = "NodeMCU ESP8266";
  isBoardConnected: boolean = false;
  modalConnectBoardComponent: Type<any>;

  // Grouped routes
  myAreaRoutes = [
    'my-profile',
    'change-password',
  ];

  settingsRoutes = [
    'page-access',
    'permissions',
    'roles',
  ];

  hardwareManagerRoutes = [
    'config-boards',
    'config-sensors',
    'config-actuators',
    'config-pin-types',
  ];

  userHardwareRoutes = [
    'sensors',
    'actuators',
    'automation',
  ];

  version = `${VERSION.version}`
  hash = `${VERSION.hash}`

  constructor(
    public auth: AuthService,
    public toggle: ToggleService,
    public config: AppConfigService,
    public commonAuth: CommonAuthService,
    public router: Router,
    public permissions: PermissionsGuardService
  ) {
    this.modalConnectBoardComponent = NewBoardsComponent;
  }

  ngOnInit(): void {
  }

}
