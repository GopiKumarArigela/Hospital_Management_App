import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StorageService } from '../../../auth/services/storage.service';  // adjust path if needed

export interface Patient {
  id: number;
  patientName: string;
  age: number;
  email: string;
  gender: string;
  dob: string;
  weight: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   private baseUrl = 'http://localhost:8765/api/v1/patients'; // Gateway URL


  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/all`, {
      headers: this.createAuthorizationHeader()
    });
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }
}
