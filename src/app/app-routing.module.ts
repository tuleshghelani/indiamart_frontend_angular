import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnquiryDetailsComponent } from './pages/enquiry-details/enquiry-details.component';
import { FollowupComponent } from './pages/followup/followup.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER } from 'ngx-ui-loader';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { inject } from '@angular/core';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './pages/signup/signup.component';
import { NewEnquiryComponent } from './pages/new-enquiry/new-enquiry.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsType: SPINNER.threeBounce,
  fgsSize: 100,
  fgsColor: '#007bff',
  blur: 5,
  overlayColor: 'rgba(40,40,40,0.1)',
  hasProgressBar: false
};

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'enquiry-details/:id',
    loadChildren: () => import('./pages/enquiry-details/enquiry-details.module')
      .then(m => m.EnquiryDetailsModule),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'followups',
    loadChildren: () => import('./pages/followup/followup.module')
      .then(m => m.FollowupModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-follow-up',
    loadChildren: () => import('./pages/create-follow-up-dialog/create-follow-up-dialog.module')
      .then(m => m.CreateFollowUpDialogModule),
    canActivate: [AuthGuard]
  },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  {
    path: 'new-enquiry',
    loadChildren: () => import('./pages/new-enquiry/new-enquiry.module').then(m => m.NewEnquiryModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
