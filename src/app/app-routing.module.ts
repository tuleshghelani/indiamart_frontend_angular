import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnquiryDetailsComponent } from './pages/enquiry-details/enquiry-details.component';
import { FollowupComponent } from './pages/followup/followup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'enquiry-details/:id', component: EnquiryDetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'followups', component: FollowupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
