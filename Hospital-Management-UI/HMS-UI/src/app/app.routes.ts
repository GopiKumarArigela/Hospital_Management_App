
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { redirectGuard } from './redirect.guard';


export const routes: Routes = [
  {
    path: "",
    component: HomeComponentComponent,
    canActivate: [redirectGuard]   // ✅ check login before showing Home
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "admin",
    loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "user",
    loadChildren: () => import("./modules/user/user.module").then(m => m.UserModule)
  },
    {
    path: "doctor",
    loadChildren: () => import("./modules/doctor/doctor.module").then(m => m.DoctorModule)
  }
];