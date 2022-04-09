import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toastr: ToastrService
  ) { }

  /**
   * Show success alert
   * @param heading
   * @param message
   * @param timeout
   */
  showSuccess(message: string, heading:string = "Success", timeout: number = 3000) {
    this.toastr.success(message, heading, {
      timeOut: timeout,
      tapToDismiss: true
    });
  }

  /**
   * Show error alert
   * @param heading
   * @param message
   * @param timeout
   */
  showError(message: string, heading:string = "Error", timeout: number = 3000) {
    this.toastr.error(message, heading, {
      timeOut: timeout,
      tapToDismiss: true
    });
  }
}
