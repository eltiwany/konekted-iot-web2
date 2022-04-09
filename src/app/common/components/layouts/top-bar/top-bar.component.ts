import { PreferencesService } from './../../../services/preferences.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FunctionsService } from './../../../services/extras/functions.service';
import { PermissionsGuardService } from './../../../../services/guards/permissions-guard.service';
import { UrlService } from './../../../services/extras/url.service';
import { ExportOptionsService } from './../../../services/export-options.service';
import { ModalsService } from './../../../services/layouts/modals.service';
import { LoaderService } from 'src/app/common/services/extras/loader.service';
import { ButtonsService } from './../../../services/layouts/buttons.service';
import { AppConfigService } from './../../../services/app-config.service';
import { Component, Input, Type, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';

interface importInterface {
  importData(data: any): Promise<any>;
}

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  // @ts-ignore
  file: any = [];
  importedDataFile: any = [];
  fileName: any;
  arrayBuffer: any;
  dtOptions: any[] = [];
  urls: any;

  form = new FormGroup({
    sdl: new FormControl()
  });

  // Accepted columns for imported file
  @Input() importColumns = [];
  // @ts-ignore
  @Input() importService: importInterface;
  @Input() importButton  = false;
  @Input() importButtonName  = "Import Data From Excel/CSV";

  @Input() sdlButton  = false;

  // @ts-ignore
  @Input() modalConfirmContent: Type<any>;
  @Input() confirmAllButton  = false;
  @Input() confirmAllButtonName  = "Confirm All Employees";

  // @ts-ignore
  @Input() modalClearLogsContent: Type<any>;
  @Input() clearLogsButton  = false;

  @Input() exportOptions = false;
  @Input() newButton  = false;
  @Input() newButtonName  = "New Item";

  // @ts-ignore
  @Input() modalContent: Type<any>;
  @Input() modalSize: 'md' | 'lg' | 'sm' | 'xl' = 'md';
  @Input() dataArray: any[] = [];
  @Input() colsArray: any[] = [];

  constructor(
    public config: AppConfigService,
    public route: ActivatedRoute,
    public router: Router,
    public buttons: ButtonsService,
    private loader: LoaderService,
    public modal: ModalsService,
    public exportService: ExportOptionsService,
    public url: UrlService,
    public permission: PermissionsGuardService,
    public fn: FunctionsService,
    private preference: PreferencesService
  ) {}

  ngOnInit(): void {
    if (this.sdlButton)
      this.preference.getPreference("sdl").then((response) => {
        if (!response.error)
          if (response.data)
            this.form.get('sdl')?.setValue(response.data.value);
      });
  }

  refresh() {
    this.loader.refresh();
  }

  /**
   * Detect file changed and open
   * modal as requested
   *
   * @param event fileChanged
   * @param content modalContent
   */
  onFileChange(event: any, content: any): void {
    this.importedDataFile = [];
    this.file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    this.fileName = this.file.name;
    fileReader.onload = () => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = [];
      for (let i = 0; i !== data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
      }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, {type: 'binary', cellDates: true});
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      // console.log(this.accountsFile);
      const arraylist: any[] = XLSX.utils.sheet_to_json(worksheet, {raw: true});
      // console.log(arraylist);

      for (const datum of arraylist) {
        // console.log(datum);
        // Check if all required columns exists on a file
        let approvedToImport = false;
        this.importColumns.forEach(column => {
          if (!datum[column]) {
            approvedToImport = false;
            return;
          }
          approvedToImport = true;
        });
        // If all columns exists add to file
        if (approvedToImport) {
          this.importedDataFile.push(datum);
        }
      }
      // console.log(this.importedDataFile);
      if (this.file.length !== 0) {
        this.dtOptions[1] = {
          pagingType: 'full_numbers',
          pageLength: 10,
          order: [[ 0, 'asc' ]]
        };
      }
      this.modal.open(content, 'xl');
    };
  }

  importFileData(): void {
    if (this.file.length !== 0) {
      this.importService.importData(this.importedDataFile).then((response) => {
        if (!response.error) {
          this.modal.close();
          this.refresh();
        }
      });
    }
  }

  updateSDL() {
    let data = {
      key: 'sdl',
      value: this.form.get('sdl')?.value
    };
    // console.log(data);

    if (this.form.valid)
      this.preference.setPreference("sdl", data).then(()=>{
        this.modal.close();
      });
  }

}
