import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from '../../services/enquiry.service';
import { LoaderService } from '../../services/loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-enquiry',
  templateUrl: './new-enquiry.component.html',
  styleUrls: ['./new-enquiry.component.scss']
})
export class NewEnquiryComponent implements OnInit {
  enquiryForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private enquiryService: EnquiryService,
    private loaderService: LoaderService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm(): void {
    this.enquiryForm = this.fb.group({
      QUERY_TYPE: ['M'],
      SENDER_NAME: ['', Validators.required],
      SENDER_MOBILE: ['', [Validators.pattern('[0-9]{10}')]],
      SENDER_MOBILE_ALT: ['', [Validators.pattern('[0-9]{10}')]],
      SENDER_EMAIL: ['', [Validators.email]],
      SUBJECT: [''],
      SENDER_COMPANY: [''],
      SENDER_ADDRESS: [''],
      SENDER_CITY: [''],
      SENDER_STATE: [''],
      SENDER_PINCODE: [''],
      SENDER_COUNTRY_ISO: [''],
      SENDER_PHONE: [''],
      SENDER_PHONE_ALT: [''],
      SENDER_EMAIL_ALT: ['', [Validators.email]],
      QUERY_PRODUCT_NAME: ['', Validators.required],
      QUERY_MESSAGE: [''],
      QUERY_MCAT_NAME: ['', Validators.required]
    });
  }

  formatMobileNumber(number: string): string {
    if (!number) return '';
    return `+91-${number}`;
  }

  onSubmit(): void {
    if (this.enquiryForm.valid) {
      const formData = { ...this.enquiryForm.value };

      // Format mobile numbers
      if (formData.SENDER_MOBILE) {
        formData.SENDER_MOBILE = this.formatMobileNumber(formData.SENDER_MOBILE);
      }
      if (formData.SENDER_MOBILE_ALT) {
        formData.SENDER_MOBILE_ALT = this.formatMobileNumber(formData.SENDER_MOBILE_ALT);
      }

      const loaderId = 'new-enquiry-loader';
      this.loaderService.start(loaderId);

      this.enquiryService.createManualEnquiry(formData).subscribe({
        next: (response) => {
          this.snackBar.open('Enquiry created successfully!', 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
          this.router.navigate(['/dashboard']);
          this.loaderService.stop(loaderId);
        },
        error: (error) => {
          console.error('Error creating enquiry:', error);
          this.snackBar.open('Error creating enquiry. Please try again.', 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
          this.loaderService.stop(loaderId);
        }
      });
    }
  }

  resetForm(): void {
    this.enquiryForm.reset({
      QUERY_TYPE: 'M' // Maintain the hardcoded value after reset
    });
  }
}
