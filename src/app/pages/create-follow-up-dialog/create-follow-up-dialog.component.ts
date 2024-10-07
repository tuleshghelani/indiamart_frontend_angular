import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STATUS_OPTIONS } from 'src/app/shared/constants';
import { DatePipe } from '@angular/common';
import { EnquiryService } from '../../services/enquiry.service'; // Adjust the import path as needed

@Component({
  selector: 'app-create-follow-up-dialog',
  templateUrl: './create-follow-up-dialog.component.html',
  styleUrls: ['./create-follow-up-dialog.component.scss']
})
export class CreateFollowUpDialogComponent implements OnInit {
  followUpForm: FormGroup;
  statusOptions = STATUS_OPTIONS;
  enquiryId: number = 0;

  constructor(
    public dialogRef: MatDialogRef<CreateFollowUpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { enquiryId: number },
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private enquiryService: EnquiryService
  ) {
    this.followUpForm = this.fb.group({
      enquiry_id: [data.enquiryId],
      follow_up_status: ['S', Validators.required],
      description: [null],
      next_action_date: [null, Validators.required],
      next_action_time: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize form and other properties here if needed
  }

  onSubmit(): void {
    if (this.followUpForm.valid) {
      const date = this.datePipe.transform(this.followUpForm.get('next_action_date')?.value, 'dd-MM-yyyy');
      const time = this.followUpForm.get('next_action_time')?.value;

      console.log('Time value:', time); // Add this line for debugging

      const formattedTime = time + ':00' || '00:00:00'; // Default to '00:00' if time is undefined

      const combinedDateTime = `${date} ${formattedTime}`;

      console.log('Combined DateTime:', combinedDateTime); // Add this line for debugging

      const payload = {
        ...this.followUpForm.value,
        next_action_date: combinedDateTime
      };

      delete payload.next_action_time;

      this.dialogRef.close(payload);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  // onSubmit() {
  //   if (this.followUpForm.valid) {
  //     const date = this.followUpForm.get('next_action_date').value;
  //     const time = this.followUpForm.get('next_action_time').value || '00:00';
  //     const combinedDateTime = `${date} ${time}`;

  //     this.enquiryService.createFollowUp(this.enquiryId, combinedDateTime).subscribe(
  //       (response) => {
  //         console.log('Follow-up created successfully', response);
  //         this.refreshEnquiryDetails();
  //       },
  //       (error) => {
  //         console.error('Error creating follow-up', error);
  //       }
  //     );
  //   }
  // }

  private refreshEnquiryDetails() {
    this.enquiryService.getEnquiryDetails(this.enquiryId).subscribe(
      (enquiryDetails) => {
        console.log('Enquiry details refreshed', enquiryDetails);
      },
      (error) => {
        console.error('Error fetching enquiry details', error);
      }
    );
  }
}
