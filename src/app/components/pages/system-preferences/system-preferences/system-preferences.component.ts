import { ApiService } from './../../../../common/services/api/api.service';
import { LoaderService } from './../../../../common/services/extras/loader.service';
import { AlertService } from './../../../../common/services/extras/alert.service';
import { AppConfigService } from './../../../../common/services/app-config.service';
import { FormGroup, FormControl } from '@angular/forms';
import { PreferencesService } from './../../../../common/services/preferences.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-system-preferences',
  templateUrl: './system-preferences.component.html',
  styleUrls: ['./system-preferences.component.css']
})
export class SystemPreferencesComponent implements OnInit {
  preferences = [];
  keys = [
    'sdl',
    'organizationLogo',
    'organizationName',
    'systemName',
    'itSupport',
  ];

  form: FormGroup;
  imageFile: {link: string, file: any, name: string} = {link: "", file: undefined, name: ""};

  constructor(
    private preference: PreferencesService,
    public config: AppConfigService,
    private alert: AlertService,
    private loader: LoaderService,
    public api: ApiService
  ) {
    // Prepare all controls from keys
    let controls: any = {};
    this.keys.forEach((control: any) => {
      controls[control] = new FormControl()
    });

    // Add controls to formGroup
    this.form = new FormGroup(controls);
   }

  ngOnInit(): void {
    this.getPreferences();
  }

  getPreference(key: string) {
    if (this.preferences.length != 0)
      this.preferences.forEach((preference: any) => {
        // console.log(preference);
        if (preference.key == key) {
          // console.log(key, preference.key, preference.value);
          this.form.setControl(key, new FormControl(preference.value));
        }
      });
  }

  removePreference(key: string) {
    this.preference.removePreference(key).then((response) => {
      if (!response.error)
        this.loader.refresh();
    });
  }

  getPreferences() {
    this.preference.getPreferences().then((response) => {
      if (!response.error) {
        this.preferences = response.data;
        this.keys.forEach((key: string) => {
          // console.log(key);
          this.getPreference(key);
        });
      }
    });
  }

  updatePreference(key: string) {
    let data = {
      key: key,
      value: this.form.get(key)?.value
    };
    // console.log(data);

    if (this.form.valid)
      this.preference.setPreference(key, data);
  }

  updatePreferenceFiles(key: string): void {
    const formData = new FormData();
    formData.append('key', key);
    formData.append('value', this.imageFile.file);
    // console.log(formData.get('value'));

    if (this.imageFile.file)
      this.preference.setPreferenceFile(formData).then((response) => {
        if (!response.error)
          this.loader.refresh();
      });
  }

  imagesPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      let extension = event.target.files[0].type.split('/').pop().toLowerCase();
      let size = event.target.files[0].size;

      if (
        extension == "jpeg" ||
        extension == "jpg"  ||
        extension == "png"  ||
        extension == "bmp"  ||
        extension == "gif"  ||
        extension == "svg"  ||
        extension == "svg+xml"
      ) {
        if (size < 1000000) {
          const reader = new FileReader();
          reader.onload = (_event: any) => {
            // console.log(event.srcElement.files[0]);

              this.imageFile = {
                  link: _event.target.result,
                  file: event.srcElement.files[0],
                  name: event.srcElement.files[0].name
              };
          };
          reader.readAsDataURL(event.target.files[0]);
        }else
          this.alert.showError('Logo should not exceed 1MB in size!');
      }else
        this.alert.showError('Only Images are Allowed!');
    }
  }

}
