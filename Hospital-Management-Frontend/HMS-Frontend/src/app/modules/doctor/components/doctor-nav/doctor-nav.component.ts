import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material.module';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../../auth/services/storage.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-nav',
  imports: [MaterialModule,CommonModule,RouterLink],
  templateUrl: './doctor-nav.component.html',
  styleUrl: './doctor-nav.component.css'
})
export class DoctorNavComponent {
 isDoctorLoggedIn: boolean = StorageService.isDoctorLoggedIn();
    constructor(private router: Router) {
      this.router.events.subscribe(event => {
        this.isDoctorLoggedIn = StorageService.isDoctorLoggedIn();
      
      });
    }

  
    logout()
    {
      StorageService.logout();
      this.router.navigateByUrl('/login');
    }
}
