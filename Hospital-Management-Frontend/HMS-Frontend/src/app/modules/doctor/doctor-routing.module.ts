import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import { DoctorNavComponent } from './components/doctor-nav/doctor-nav.component';
import { AppointmentDoctorComponent } from './components/appointment-doctor/appointment-doctor.component';


  const routes: Routes = [
    {path:"dashboard",component:DoctordashboardComponent},
    {path:"doctornavbar",component:DoctorNavComponent},
    {path:"appointments",component:AppointmentDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
