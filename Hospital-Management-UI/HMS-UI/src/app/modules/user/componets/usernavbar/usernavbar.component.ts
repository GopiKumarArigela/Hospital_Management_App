import { Component } from '@angular/core';
import { StorageService } from '../../../../auth/services/storage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';

@Component({
  selector: 'app-usernavbar',
  imports: [CommonModule,MaterialModule],
  templateUrl: './usernavbar.component.html',
  styleUrl: './usernavbar.component.css'
})
export class UsernavbarComponent {
 isUserLoggedIn: boolean = StorageService.isUserLoggedIn();
    constructor(private router: Router) {
      this.router.events.subscribe(event => {
        this.isUserLoggedIn = StorageService.isUserLoggedIn();
      
      });
    }

  
    logout()
    {
      StorageService.logout();
      this.router.navigateByUrl('/login');
    }
}
