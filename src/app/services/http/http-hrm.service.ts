import { AlertService } from './../../common/services/extras/alert.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from 'src/app/common/services/extras/loader.service';

@Injectable({
  providedIn: 'root'
})
export class HttpHrmService {

  token: string = localStorage.getItem('token') + '';
  headers = {
    authToken: {Authorization: `Bearer ${this.token}`},
  }

  constructor(
    private http: HttpClient,
    private loader: LoaderService,
    private alert: AlertService
  ) { }

  /**
   * Get from API and return responce object
   * @param url
   * @returns Promise<responce>
   */
  async get(url: string, displayReponseAlert?: boolean): Promise<any> {
    return new Promise(resolve => {
      this.loader.start();
      this.http.get(url, {
        headers: this.headers.authToken
      }).subscribe((response: any) => {
        if (displayReponseAlert)
          this.alert.showSuccess(response?.message);
        this.loader.complete();
        resolve(response);
      }, (errors) => {
        this.alert.showError(errors?.error?.message);
        this.loader.complete();
        resolve(errors);
      }, () => {
        this.loader.complete();
      });
    });
  }

  /**
   * Show data of specified id from API and return responce object
   * @param url
   * @returns Promise<responce>
   */
   async show(url: string, dataId: string, displayReponseAlert?: boolean): Promise<any> {
    return new Promise(resolve => {
      this.loader.start();
      this.http.get(url + '/' + dataId, {
        headers: this.headers.authToken
      }).subscribe((response: any) => {
        if (displayReponseAlert)
          this.alert.showSuccess(response?.message);
        this.loader.complete();
        resolve(response);
      }, (errors) => {
        this.alert.showError(errors?.error?.message);
        this.loader.complete();
        resolve(errors);
      }, () => {
        this.loader.complete();
      });
    });
  }

  /**
   * Post data to API and return responce object
   * @param url
   * @returns Promise<responce>
   */
   async post(url: string, data: any, displayReponseAlert?: boolean): Promise<any> {
     return new Promise(resolve => {
      this.loader.start();
      this.http.post(url, data, {
        headers: this.headers.authToken
      }).subscribe((response: any) => {
        if (displayReponseAlert)
          this.alert.showSuccess(response?.message);
        this.loader.complete();
        // console.log(response);
        resolve(response);
      }, (errors) => {
        this.alert.showError(errors?.error?.message);
        this.loader.complete();
        // console.log(errors);
        resolve(errors);
      }, () => {
        this.loader.complete();
      });
    })
  }

  /**
   * Post data to API and return responce object
   * @param url
   * @returns Promise<responce>
   */
   async postFiles(url: string, data: any, displayReponseAlert?: boolean): Promise<any> {
    const fileHeaders = new HttpHeaders();
    fileHeaders.append('Content-Type', 'multipart/form-data');
    fileHeaders.append('Accept', 'application/json');
    fileHeaders.append('Authorization', `Bearer ${this.token}`);

    return new Promise(resolve => {
     this.loader.start();
     this.http.post(url, data, {
       headers: fileHeaders
     }).subscribe((response: any) => {
       if (displayReponseAlert)
         this.alert.showSuccess(response?.message);
       this.loader.complete();
       // console.log(response);
       resolve(response);
     }, (errors) => {
       this.alert.showError(errors?.error?.message);
       this.loader.complete();
       // console.log(errors);
       resolve(errors);
     }, () => {
       this.loader.complete();
     });
   })
 }

  /**
   * Put data to API and return responce object
   * @param url
   * @returns Promise<responce>
   */
   async put(url: string, dataId: string, data: any, displayReponseAlert?: boolean): Promise<any> {
    return new Promise(resolve => {
     this.loader.start();
     this.http.put(url + '/' + dataId, data, {
       headers: this.headers.authToken
     }).subscribe((response: any) => {
       if (displayReponseAlert)
         this.alert.showSuccess(response?.message);
       this.loader.complete();
       // console.log(response);
       resolve(response);
     }, (errors) => {
       this.alert.showError(errors?.error?.message);
       this.loader.complete();
       // console.log(errors);
       resolve(errors);
     }, () => {
       this.loader.complete();
     });
   })
 }

 /**
   * Put data to API and return responce object
   * @param url
   * @returns Promise<responce>
   */
  async putFiles(url: string, dataId: string, data: FormData | any, displayReponseAlert?: boolean): Promise<any> {
    const fileHeaders = new HttpHeaders()
      .set('Content-Type', 'multipart/form-data')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${this.token}`);

    let options = {
      headers: fileHeaders
    };

    return new Promise(resolve => {
     this.loader.start();
     this.http.put(url + '/' + dataId, data, options).subscribe((response: any) => {
       if (displayReponseAlert)
         this.alert.showSuccess(response?.message);
       this.loader.complete();
       // console.log(response);
       resolve(response);
     }, (errors) => {
       this.alert.showError(errors?.error?.message);
       this.loader.complete();
       resolve(errors);
     }, () => {
       this.loader.complete();
     });
   })
 }

 /**
   * Delete data to API and return responce object
   * @param url
   * @returns Promise<responce>
   */
  async delete(url: string, dataId: string, displayReponseAlert?: boolean): Promise<any> {
    return new Promise(resolve => {
     this.loader.start();
     this.http.delete(url + '/' + dataId, {
       headers: this.headers.authToken
     }).subscribe((response: any) => {
       if (displayReponseAlert)
         this.alert.showSuccess(response?.message);
       this.loader.complete();
       // console.log(response);
       resolve(response);
     }, (errors) => {
       this.alert.showError(errors?.error?.message);
       this.loader.complete();
       // console.log(errors);
       resolve(errors);
     }, () => {
       this.loader.complete();
     });
   })
 }
}
