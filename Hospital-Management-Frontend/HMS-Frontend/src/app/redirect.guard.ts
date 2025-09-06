import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from './auth/services/storage.service';

export const redirectGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (StorageService.isAdminLoggedIn()) {
    router.navigate(['/admin/dashboard']);
    return false;
  } else if (StorageService.isUserLoggedIn()) {
    router.navigate(['/user/dashboard']);
    return false;
  }

  // If not logged in → allow default HomeComponent
  return true;
};
