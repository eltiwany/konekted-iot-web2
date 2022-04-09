import { InactiveService } from './../inactive.service';
import { HttpHrmService } from './../http/http-hrm.service';
import { ApiService } from './../../common/services/api/api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode, { JwtPayload } from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isRefreshed = false;

  constructor(
    private http: HttpHrmService,
    private api: ApiService,
    private inactive: InactiveService
  ) { }

  /**
   * Authenticate user based on given data
   * @param userData
   * @returns any
   */
  async authenticate(userData: object): Promise<any> {
    return this.http.post(this.api.auth.authenticate, userData, true);
  }

  /**
   * Activate newely created user based on given data
   * @param userData
   * @returns any
   */
   async activateAccount(userData: object): Promise<any> {
    return this.http.post(this.api.auth.activateAccount, userData, true);
  }

  /**
   * Set Authentication data after
   * user has successfully loggen in
   * @param userData
   */
  setAuth(userData: any): void {
    localStorage.setItem('token', userData.accessToken);
    // localStorage.setItem('tokenType', userData.tokenType);
    // localStorage.setItem('expiresIn', userData.expiresIn);
  }

  getAuth(): any {
      if (!this.isGuest()) {
        const jwt: any = jwt_decode(localStorage.getItem('token') + '');
        return {
          token: localStorage.getItem('token'),
          email: jwt.email,
          fullName: jwt.fullName,
          employeeId: jwt.employeeId,
          gender: jwt.gender,
          permissions: jwt.permissions,
          user_id: jwt.sub,
          header: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        };
      }
      return {}
  }

  /**
   * Check if user have not logged in
   * @param void
   * @returns boolean
   */
  isGuest(): boolean {
    return !localStorage.getItem('token') || this.tokenExpired();
  }

  /**
   * Check if token expired
   * @param token
   * @returns boolean
   */
  tokenExpired(): boolean {
    const token = localStorage.getItem('token') + '';
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    // const expiry2 = jwt_decode<JwtPayload>(token)?.exp;
    // console.log(jwt_decode<JwtPayload>(token));
    const now = Math.floor((new Date).getTime() / 1000);
    // console.log(expiry - now);
    return (Math.floor((new Date).getTime() / 1000)) >= (expiry == undefined ? 0 : expiry);
  }

  async logout(): Promise<any> {
    return this.http.post(this.api.auth.logout, [], true);
  }

  removeStorage(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenType');
    localStorage.removeItem('expiresIn');
  }

  /**
   * Refresh token if user is active after 60mins
   */
  refreshToken(): void {
    if (!this.isRefreshed) {
      this.http.post(this.api.auth.refresh, [], false).then((response) => {
        if (!response.error)
          this.setAuth(response.data);
      });
      this.isRefreshed = true;
    }
  }
}
