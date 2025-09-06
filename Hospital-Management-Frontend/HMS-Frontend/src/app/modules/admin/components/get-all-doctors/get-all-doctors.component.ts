import { Component } from '@angular/core';
import { Doctor, DoctorService } from '../../services/doctor.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { HomeComponentComponent } from '../../../../home-component/home-component.component';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';

@Component({
  selector: 'app-get-all-doctors',
  imports: [CommonModule,MaterialModule,AdminNavComponent],
  templateUrl: './get-all-doctors.component.html',
  styleUrl: './get-all-doctors.component.css'
})
export class GetAllDoctorsComponent {
 doctors: Doctor[] = [];
  displayedColumns: string[] = ['id', 'doctorName', 'doctorEmail', 'age', 'experience', 'domain', 'gender'];

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe({
      next: (res) => {
        this.doctors = res;
      },
      error: (err) => {
        console.error("Error fetching doctors", err);
      }
    });
  }
}
