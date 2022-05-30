import { ModalsService } from './../../../services/layouts/modals.service';
import { AppConfigService } from './../../../services/app-config.service';
import { Component, Input, OnInit, Injector } from '@angular/core';
import { ProviderClass } from '../../modals/provider-class';

@Component({
  selector: 'app-hardware-list-card',
  templateUrl: './hardware-list-card.component.html',
  styleUrls: ['./hardware-list-card.component.css']
})
export class HardwareListCardComponent implements OnInit {

  dataInjected: any = {};
  @Input() heading = "View Device";
  @Input() headingDelete = "Delete Device";

  @Input() imageUrl: string = this.config.preferences.imageSelector;
  @Input() iconName: string = "plus-circle-fill";
  @Input() color: "tertiary" | "primary" | "success" | "info" | "dark" | "warning" = "tertiary";

  @Input() isImage: boolean = false;

  @Input() showStatus: boolean = true;
  @Input() status: string = "Offline";

  @Input() textButton: boolean = false;

  @Input() link: boolean = true;
  @Input() linkMessage: string = "Click the \"plus\" icon to link a device.";

  @Input() deviceName: string = "Device Name";
  @Input() token: string = "";
  @Input() interval: string = "";

  @Input() connections: any[] = [];
  @Input() columns: any[] = [];

  // @ts-ignore
  @Input() modalContent: Type<any>;
  @Input() modalSize: 'md' | 'lg' | 'sm' | 'xl' = 'md';

  @Input() deleteAction: boolean = false;
  // @ts-ignore
  @Input() modalDeleteContent: Type<any>;
  @Input() modalDeleteSize: 'md' | 'lg' | 'sm' | 'xl' = 'md';

  // Data for View & Edit
  @Input() data: any[] = [];

  constructor(
    private config: AppConfigService,
    private injector: Injector,
    public modalService: ModalsService,
  ) {}

  ngOnInit(): void {
    this.dataInjected = this.createInjector(this.data);
  }

  createInjector(dataObj: any) {
    // The ProviderClass is really just a stub, but is
    // neccessary for injection to work.
    return Injector.create(
      [{ provide: ProviderClass, useValue: dataObj }],
      this.injector
    );
  }

}
