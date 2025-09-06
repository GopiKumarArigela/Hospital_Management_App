import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage.service';

const BASIC_URL = 'http://localhost:8765/'; // API Gateway

export interface Appointment {
  id: number;
  patientId: number;
  patientName: string;
  doctorId: number;
  doctorName: string;
  appointmentDate: string;
}


export interface MedicalRecord {
  id: number;
  disease: string;
  description: string;
  date: string;
  medicines: string;
}

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {}

getAppointmentsByDoctor(doctorId: number): Observable<Appointment[]> {
  return this.http.get<Appointment[]>(`${BASIC_URL}api/v1/appointments/doctor/${doctorId}`, {
    headers: this.createAuthorizationHeader()
  });
}

getMedicalRecordsByPatient(patientId: number): Observable<MedicalRecord[]> {
  return this.http.get<MedicalRecord[]>(`${BASIC_URL}api/v1/records/patient/${patientId}`, {
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
