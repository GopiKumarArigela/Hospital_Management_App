import { Component } from '@angular/core';
import { Appointment, DoctorService, MedicalRecord } from '../../services/doctor.service';
import { StorageService } from '../../../../auth/services/storage.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { DoctorNavComponent } from '../doctor-nav/doctor-nav.component';

@Component({
  selector: 'app-appointment-doctor',
  imports: [CommonModule,MaterialModule,DoctorNavComponent],
  templateUrl: './appointment-doctor.component.html',
  styleUrl: './appointment-doctor.component.css'
})
export class AppointmentDoctorComponent {
appointments: Appointment[] = [];
  displayedColumns: string[] = ['id', 'patientName', 'appointmentDate', 'actions'];

  expandedRecords: { [patientId: number]: MedicalRecord[] } = {};

  constructor(private appointmentService: DoctorService) {}

ngOnInit(): void {
  const doctorId = StorageService.getUserId();
  console.log('Doctor ID from storage = ', doctorId); // 👈 Debug

  if (doctorId) {
    this.appointmentService.getAppointmentsByDoctor(Number(doctorId)).subscribe({
      next: (res) => {
        console.log('Appointments = ', res); // 👈 Debug
        this.appointments = res;
      },
      error: (err) => console.error('Error fetching appointments', err)
    });
  }
}

  viewRecords(patientId: number) {
    if (this.expandedRecords[patientId]) {
      delete this.expandedRecords[patientId]; // toggle close
    } else {
      this.appointmentService.getMedicalRecordsByPatient(patientId).subscribe({
        next: (records) => this.expandedRecords[patientId] = records,
        error: (err) => console.error('Error fetching records', err)
      });
    }
  }
}
