import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryService } from 'src/app/services/enquiry.service';
import { STATUS_OPTIONS } from 'src/app/shared/constants';
import { getLeadType } from 'src/app/shared/utils';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { FollowUpService } from 'src/app/services/followup.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateFollowUpDialogComponent } from '../create-follow-up-dialog/create-follow-up-dialog.component';

@Component({
  selector: 'app-enquiry-details',
  templateUrl: './enquiry-details.component.html',
  styleUrls: ['./enquiry-details.component.scss']
})
export class EnquiryDetailsComponent implements OnInit {
  enquiryDetails: any;
  loading = true;
  error = false;
  statusOptions = STATUS_OPTIONS;
  getLeadType = getLeadType;

  constructor(
    private route: ActivatedRoute,
    private enquiryService: EnquiryService,
    private router: Router,
    private followUpService: FollowUpService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchEnquiryDetails(+id);
    }
  }

  onAction(): void {
    this.router.navigate(['/dashboard']);
  }

  fetchEnquiryDetails(id: number): void {
    this.enquiryService.getEnquiryDetails(id).subscribe(
      (response) => {
        this.enquiryDetails = response.DATA;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching enquiry details', error);
        this.loading = false;
        this.error = true;
      }
    );
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'S': return 'status-success';
      case 'C': return 'status-closed';
      // Add more cases as needed
      default: return 'status-default';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'S': return 'check_circle';
      case 'C': return 'cancel';
      // Add more cases as needed
      default: return 'help';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'S': return 'Scheduled';
      case 'C': return 'Completed';
      // Add more cases as needed
      default: return 'Unknown';
    }
  }


  openCreateFollowUpDialog(): void {
    const dialogRef = this.dialog.open(CreateFollowUpDialogComponent, {
      width: '400px',
      data: { enquiryId: this.enquiryDetails.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createFollowUp(result);
      }
    });
  }

  createFollowUp(followUpData: any): void {
    this.followUpService.createFollowUp(followUpData).subscribe(
      response => {
        console.log('Follow-up created:', response);
        this.refreshEnquiryDetails(followUpData?.enquiry_id);
        // Refresh the enquiry details or update the UI as needed
      },
      error => {
        console.error('Error creating follow-up:', error);
        // Handle error (e.g., show error message to user)
      }
    );
  }

  private refreshEnquiryDetails(enquiryId: number) {
    this.ngOnInit();
  }
}
