import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ngxUiLoaderConfig } from '../../shared/ngx-ui-loader.config';
import { SharedModule } from 'src/app/shared/shared.module';

import { NewEnquiryComponent } from './new-enquiry.component';

const routes: Routes = [
  {
    path: '',
    component: NewEnquiryComponent
  }
];

@NgModule({
  declarations: [NewEnquiryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    SharedModule
  ]
})
export class NewEnquiryModule { } 
