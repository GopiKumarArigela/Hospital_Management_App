import { Component } from '@angular/core';
import { Patient, UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';

@Component({
  selector: 'app-getall-patients',
  imports: [CommonModule,MaterialModule,AdminNavComponent],
  templateUrl: './getall-patients.component.html',
  styleUrl: './getall-patients.component.css'
})
export class GetallPatientsComponent {
patients: Patient[] = [];
  displayedColumns: string[] = ['id', 'patientName', 'email', 'age', 'gender', 'dob', 'weight'];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllPatients().subscribe({
      next: (res) => {
        this.patients = res;
      },
      error: (err) => {
        console.error("Error fetching patients", err);
      }
    });
  }
}
