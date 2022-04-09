import { AppConfigService } from './../../../services/app-config.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-md4',
  templateUrl: './card-md4.component.html',
  styleUrls: ['./card-md4.component.css']
})
export class CardMd4Component implements OnInit {
  @Input() cardName: any = "Card Name";
  @Input() allDataUrl: any = "/";
  @Input() cardNumberFormat: 'percent' |
                              'number' |
                              'currency' = 'number';
  @Input() cardNumber: number = 0;
  @Input() iconName: any = 'info-circle-fill';
  @Input() bgColor: 'primary' |
                  'secondary' |
                    'success' |
                       'dark' |
                       'info' |
                      'light' |
                      'danger'|
                      'warning' = 'info';
  @Input() textColor: 'primary' |
                    'secondary' |
                      'success' |
                         'dark' |
                        'light' |
                        'white' |
                         'info' |
                        'danger'|
                        'warning' = 'white';

  constructor(
    public config: AppConfigService
  ) { }

  ngOnInit(): void {
  }

}
