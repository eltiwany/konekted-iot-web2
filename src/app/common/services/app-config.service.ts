import { ApiService } from './api/api.service';
import { PreferencesService } from './preferences.service';
import { Injectable, OnChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(
    private preference: PreferencesService,
    private api: ApiService
  ) {
    this.preference.getPreferences().then((response) => {
      if (!response.error) {
        response.data.forEach((dataSet: any) => {
          // Change system name
          if (dataSet.key == 'systemName')
            this.app.name = dataSet.value;
          // Change IT Support Number
          if (dataSet.key == 'itSupport')
            this.website.itSupport.phoneNumber = dataSet.value;
          //  Set system logo and favicon (image on topbar)
          if (dataSet.key == 'organizationLogo') {
            this.app.logoUrl = this.api.storageHost + dataSet.value;
            // @ts-ignore
            let favIcon: HTMLLinkElement = document.querySelector('#appIcon');
            favIcon.href = this.api.storageHost + dataSet.value;
          }
        });
      }
    });
  }

  app = {
    name: 'System Name',
    longName: 'System Name',
    heading: 'Headline of the System',
    description: `
                  Laravel may also serve as an API backend to a JavaScript single-page
                  application or mobile application. For example, you might use Laravel as an
                  API backend for your Next.js application
                `,
    logoUrl: 'assets/images/nafuu-hrm-new.png',
  }

  website = {
    frontImageUrl: 'assets/images/blob-scene-haikei.svg',
    itSupport: {
      name: 'Ali Abdulla Saleh',
      phoneNumber: '0777464655',
    }
  }

  preferences = {
    companyName: 'NAFUUTRONICS',
    imageSelector: 'assets/images/upload-image.svg',
  }

  monthsList = [
    {
      number: 1,
      name: 'January'
    },
    {
      number: 2,
      name: 'February'
    },
    {
      number: 3,
      name: 'March'
    },
    {
      number: 4,
      name: 'April'
    },
    {
      number: 5,
      name: 'May'
    },
    {
      number: 6,
      name: 'June'
    },
    {
      number: 7,
      name: 'July'
    },
    {
      number: 8,
      name: 'August'
    },
    {
      number: 9,
      name: 'September'
    },
    {
      number: 10,
      name: 'October'
    },
    {
      number: 11,
      name: 'November'
    },
    {
      number: 12,
      name: 'December'
    },
  ];

}
