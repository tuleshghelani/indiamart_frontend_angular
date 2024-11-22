import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FOLLOW_UP_STATUS, STATUS_OPTIONS } from 'src/app/shared/constants';
import { FollowUpService } from '../../services/followup.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.scss']
})
export class FollowupComponent implements OnInit {
  displayedColumns: string[] = ['id', 'sender_name', 'description', 'follow_up_status', 'next_action_date', 'created_at', 'action'];
  dataSource = new MatTableDataSource<any>([]);
  totalRecords = 0;
  currentPage = 1;
  pageSize = 10;
  orderBy = 'next_action_date';
  filterForm: FormGroup;
  isPendingFollowup: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  statusOptions = FOLLOW_UP_STATUS;

  constructor(
    private followUpService: FollowUpService,
    private formBuilder: FormBuilder,
    private router: Router,
    private loaderService: LoaderService
  ) {
    this.filterForm = this.formBuilder.group({
      search: [''],
      enquiryStatus: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit(): void {
    this.loadFollowUps();
  }

  loadFollowUps(): void {
    const loaderId = 'followups-loader';
    this.loaderService.start(loaderId);
    const formValues = this.filterForm.value;
    const params = {
      currentPage: this.currentPage,
      perPageRecord: this.pageSize,
      search: formValues.search,
      enquiryStatus: formValues.enquiryStatus,
      orderBy: this.orderBy,
      startDate: formValues.startDate ? this.formatDate(new Date(formValues.startDate)) : null,
      endDate: formValues.endDate ? this.formatDate(new Date(formValues.endDate)) : null,
      is_pending_followup: this.isPendingFollowup || null
    };

    this.followUpService.searchFollowUps(params).pipe(finalize(() => this.loaderService.stop(loaderId)))
      .subscribe({
        next: (response) => {
          this.dataSource.data = response.DATA.results;
          this.totalRecords = response.DATA.pagination.totalRecords;
          this.isPendingFollowup = false; // Reset after loading
          this.loaderService.stop(loaderId);
        },
        error: (error) => {
          console.error('Error fetching follow-ups', error);
          this.isPendingFollowup = false; // Reset on error
          this.loaderService.stop(loaderId);
        }
      });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadFollowUps();
  }

  onSubmit(): void {
    this.currentPage = 1;
    this.loadFollowUps();
  }

  onSortChange(event: any): void {
    this.orderBy = event.active;
    this.loadFollowUps();
  }

  getStatusText(status: string): string {
    const statusOption = this.statusOptions.find(option => option.value === status);
    return statusOption ? statusOption.viewValue : status;
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  onReset(): void {
    this.filterForm.reset();
    this.currentPage = 1;
    this.pageSize = 10;
    this.orderBy = 'next_action_date';
    this.isPendingFollowup = false; // Reset the pending flag
    if (this.sort) {
      this.sort.active = '';
      this.sort.direction = '';
    }
    if (this.paginator) {
      this.paginator.pageIndex = 0;
    }
    this.loadFollowUps();
  }

  viewEnquiry(enquiryId: number): void {
    this.router.navigate(['/enquiry-details', enquiryId]);
  }

  loadTodayFollowUps(): void {
    const today = new Date();
    const formattedDate = this.formatDate(today);

    this.filterForm.patchValue({
      startDate: today.toISOString().split('T')[0], // Format for input[type="date"]
      endDate: today.toISOString().split('T')[0],
      search: '',
      enquiryStatus: ''
    });

    this.currentPage = 1;
    if (this.paginator) {
      this.paginator.pageIndex = 0;
    }

    this.loadFollowUps();
  }

  loadPendingFollowUps(): void {
    this.isPendingFollowup = true;
    this.filterForm.reset();
    this.currentPage = 1;
    if (this.paginator) {
      this.paginator.pageIndex = 0;
    }
    this.loadFollowUps();
  }
}
