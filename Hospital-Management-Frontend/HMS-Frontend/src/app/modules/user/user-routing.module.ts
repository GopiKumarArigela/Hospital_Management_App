import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { UsernavbarComponent } from './componets/usernavbar/usernavbar.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"usernavbar",component:UsernavbarComponent},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
