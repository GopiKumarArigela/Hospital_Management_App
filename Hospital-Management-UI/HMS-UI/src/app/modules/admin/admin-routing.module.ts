import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { GetAllDoctorsComponent } from './components/get-all-doctors/get-all-doctors.component';
import { GetallPatientsComponent } from './components/getall-patients/getall-patients.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"addquestion",component:AddQuestionsComponent},
    {path:"getAllDoctors",component:GetAllDoctorsComponent},
    {path:"getAllPatiences", component: GetallPatientsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
