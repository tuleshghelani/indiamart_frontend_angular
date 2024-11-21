import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ngxUiLoaderConfig } from '../../shared/ngx-ui-loader.config';

import { EnquiryDetailsComponent } from './enquiry-details.component';
import { CreateFollowUpDialogModule } from '../create-follow-up-dialog/create-follow-up-dialog.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: EnquiryDetailsComponent
  }
];

@NgModule({
  declarations: [EnquiryDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    CreateFollowUpDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    MatSelectModule,
    FormsModule
  ]
})
export class EnquiryDetailsModule { }
