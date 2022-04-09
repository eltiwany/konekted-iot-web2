import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  closeResult = '';

  constructor(
    private modal: NgbModal
  ) { }

  /**
   * Open modals
   * @param content
   */
  open(content: any, size = 'md') {
    this.modal.open(content, {
      centered: true,
      scrollable: true,
      size: size
    });
  }

  /**
   * Close modal
   */
  close() {
    this.modal.dismissAll();
  }
}
