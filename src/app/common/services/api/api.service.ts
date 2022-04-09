import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * API Enviroment
   */
  environment: 'prod' | 'dev' = 'dev';

  /**
   * Base URL for API
   */
  baseUrl = this.environment == 'prod' ? 'http://server-url/' : 'http://localhost:8000/';

  /**
   * WebHost URL
   */
  host = this.baseUrl + 'api' + '/';

  /**
   * For storage file links
   */
  storageHost = this.baseUrl + 'storage' + '/';

  /**
   * Authentication Api's
   */
  auth = {
    authenticate: this.host + 'auth',
    activateAccount: this.host + 'activate-account',
    logout: this.host + 'logout',
    refresh: this.host + 'auth/refresh'
  }

  /**
   * Notifications Api's
   */
   notifications = {
    getRetired: this.host + 'notifications/get-retired-employees',
  }

  /**
   * Employee Area Api's
   */
   myArea = {
    changePassword: this.host + 'my-area/change-password',
  }

  /**
   * Settings API's
   */
  settings = {
    // Pages
    pageAccess: this.host + 'settings/pages',
    getPageAccess: this.host + 'settings/get-pages',

    // Permissions
    permissions: this.host + 'settings/permissions',
    getPermissions: this.host + 'settings/get-permissions',

    // Roles
    roles: this.host + 'settings/roles',
    getRoles: this.host + 'settings/get-roles',

    // Attachments
    attachments: this.host + 'settings/attachments',
    getAttachments: this.host + 'settings/get-attachments',

    // IdentificationNumbers
    identificationNumbers: this.host + 'settings/identification-numbers',
    getIdentificationNumbers: this.host + 'settings/get-identification-numbers',
  }

  /**
   * Users Api's
   */
   users = {
    getUsers: this.host + 'get-users',
    getUserLogs: this.host + 'get-user-logs',
    clearUserLogs: this.host + 'clear-user-logs',
    users: this.host + 'users',
    resetPassword: this.host + 'reset-password',
  }

  /**
   * SalaryAD (Allowances and Deductions) Api's
   */
   salaryAD = {
    // Allowances
    getAllowances: this.host + 'salary-ad/get-allowances',
    allowances: this.host + 'salary-ad/allowances',

    // Deductions
    getDeductions: this.host + 'salary-ad/get-deductions',
    deductions: this.host + 'salary-ad/deductions',

    // Income Taxes
    getIncomeTaxes: this.host + 'salary-ad/get-income-taxes',
    incomeTaxes: this.host + 'salary-ad/income-taxes',
  }

  /**
   * Banks Api's
   */
   banks = {
    getBanks: this.host + 'get-banks',
    banks: this.host + 'banks',
  }

  /**
   * Departments Api's
   */
   departments = {
    getDepartments: this.host + 'get-departments',
    departments: this.host + 'departments',
  }

  /**
   * Posts Api's
   */
   posts = {
    getPosts: this.host + 'get-posts',
    posts: this.host + 'posts',
    importPosts: this.host + 'import-posts'
  }

  /**
   * Vouchers Api's
   */
   vouchers = {
    getVouchers: this.host + 'get-vouchers',
    vouchers: this.host + 'vouchers',
  }

  /**
   * Posts Api's
   */
   employees = {
    //  Employees Registration
     employeesRegistration: {
       getEmployees: this.host + 'employees/employees-registration/get-employees',
       importEmployees: this.host + 'employees/employees-registration/import-employees',
       resources: this.host + 'employees/employees-registration',
     },

     //  Employees Confirmation
     employeesConfirmation: {
      getEmployees: this.host + 'employees/employees-confirmation/get-employees',
      resources: this.host + 'employees/employees-confirmation',
    },

    //  Employees Registration
    employeesIdentificationNumbers: {
      getEmployees: this.host + 'employees/employees-identification-numbers/get-employees',
      importEmployees: this.host + 'employees/employees-identification-numbers/import-employees',
      resources: this.host + 'employees/employees-identification-numbers',
    },

    //  Employees Registration
    employeesAttachments: {
      getEmployees: this.host + 'employees/employees-attachments/get-employees',
      resources: this.host + 'employees/employees-attachments',
    },

    //  Employees Registration
    employeesIncrements: {
      getEmployees: this.host + 'employees/employees-increments/get-employees',
      resources: this.host + 'employees/employees-increments',
    },

    //  Employees Registration
    employeesTransfers: {
      getEmployees: this.host + 'employees/employees-transfers/get-employees',
      resources: this.host + 'employees/employees-transfers',
    },

    //  Employees Financials
    employeesFinancials: {
      getEmployees: this.host + 'employees/employees-financials/get-employees',
      resources: this.host + 'employees/employees-financials',
    },

    //  Employee Deductions
    deductions: this.host + 'employees/deductions',

    //  Employee Allowances
    allowances: this.host + 'employees/allowances',
  }


  /**
   * Reports Api's
   */
  reports = {
    // Summary reports
    summaryReports: this.host + 'reports/summary-reports',
    vouchers: this.host + 'reports/vouchers',
    getYears: this.host + 'reports/get-voucher-years',
    getVouchersByYear: this.host + 'reports/get-vouchers-by-year',
    getBanks: this.host + 'reports/get-voucher-banks',
    getEmployees: this.host + 'reports/get-voucher-employees',
    getDepartments: this.host + 'reports/get-voucher-departments',
    getAllowances: this.host + 'reports/get-voucher-allowances',
    getDeductions: this.host + 'reports/get-voucher-deductions',
  }

  /**
   * Preferences Api's
   * Using this service you can
   * save key-value pair of data
   * from server
   */
  preference = {
    preferences: this.host + 'preferences',
    preferenceFiles: this.host + 'preference-files'
  }
}
