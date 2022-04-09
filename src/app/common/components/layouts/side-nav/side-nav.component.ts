import { PermissionsGuardService } from './../../../../services/guards/permissions-guard.service';
import { Router } from '@angular/router';
import { CommonAuthService } from './../../../services/common-auth.service';
import { AppConfigService } from './../../../services/app-config.service';
import { ToggleService } from './../../../services/extras/toggle.service';
import { AuthService } from './../../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { VERSION } from '../../../../../environments/version';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  // Grouped routes
  employeeRoutes = [
    'employees-registration',
    'employees-confirmation',
    'employees-autobiography',
    'employees-financials',
    'employees-identification-numbers',
    'employees-attachments',
    'employees-transfers',
    'employees-increments'
  ];

  // Grouped routes
  myAreaRoutes = [
    'my-profile',
    'my-employee-informations',
    'change-password',
    'my-pay-slips',
  ];

  salaryADRoutes = [
    'allowances',
    'deductions',
    'income-taxes'
  ];

  reportsRoutes = [
    'voucher-summary',
    'department-vouchers',
    'bank-transfer',
    'pay-slips',
    'salary-register',
    'allowances-report',
    'deductions-report',
    'income-taxes-report',
    'sdl-report'
  ];

  settingsRoutes = [
    'page-access',
    'permissions',
    'roles',
    'identification-numbers',
    'attachments'
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
  ) { }

  ngOnInit(): void {
  }

}
