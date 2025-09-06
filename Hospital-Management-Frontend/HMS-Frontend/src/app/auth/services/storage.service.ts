import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private static readonly TOKEN = 'token';
  private static readonly USER = 'user';

  constructor() {}

  private static isLocalStorageAvailable(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    );
  }

  static saveToken(token: string): void {
    if (this.isLocalStorageAvailable()) {
      window.localStorage.removeItem(StorageService.TOKEN);
      window.localStorage.setItem(StorageService.TOKEN, token);
    }
  }

  static saveUser(user: any): void {
    if (this.isLocalStorageAvailable()) {
      window.localStorage.removeItem(StorageService.USER);
      window.localStorage.setItem(StorageService.USER, JSON.stringify(user));
    }
  }

  static getToken(): string {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem(StorageService.TOKEN) || '';
    }
    return '';
  }

  static getUser(): any {
    if (this.isLocalStorageAvailable()) {
      return JSON.parse(localStorage.getItem(StorageService.USER) || '{}');
    }
    return {};
  }

  static getUserRole(): string {
    const user = this.getUser();
    if (!user) return '';
    return user.role || ''; // role should match backend response
  }

  static isAdminLoggedIn(): boolean {
    const role = this.getUserRole();
    return role === 'ADMIN';
  }

  static isUserLoggedIn(): boolean {
    const role = this.getUserRole();
    return role === 'USER';
  }

  static isDoctorLoggedIn(): boolean {
    const role = this.getUserRole();
    return role === 'DOCTOR';
  }

  static getUserId(): string {
    const user = this.getUser();
    return user ? user.id : '';
  }

  static logout(): void {
    if (this.isLocalStorageAvailable()) {
      window.localStorage.removeItem(StorageService.TOKEN);
      window.localStorage.removeItem(StorageService.USER);
    }
  }
}
