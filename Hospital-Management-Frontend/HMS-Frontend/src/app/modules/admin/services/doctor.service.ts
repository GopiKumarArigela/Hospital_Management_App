import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage.service';

const BASIC_URL = "http://localhost:8765/"; // API Gateway Base URL

export interface Doctor {
  id: number;
  doctorName: string;
  doctorEmail: string;
  age: number;
  experience: number;
  domain: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

 constructor(private http: HttpClient) {}


  getAllDoctors(): Observable<Doctor[]> {
  return this.http.get<Doctor[]>(BASIC_URL + "api/v1/doctors/all", {
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
