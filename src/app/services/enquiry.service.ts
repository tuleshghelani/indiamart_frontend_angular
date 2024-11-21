import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private ngxLoader: NgxUiLoaderService
  ) { }

  searchEnquiries(params: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/enquiry/search-enquiries/`, params);
  }

  downloadEnquiries(params: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/enquiry/download-enquiries-excel/`, params, { responseType: 'blob' });
  }


  getEnquiryDetails(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/enquiry/get-enquiry-details/`, { id });
  }

  openFollowUpDialog(enquiryId: number) {
    this.ngxLoader.start();

    import('../pages/create-follow-up-dialog/create-follow-up-dialog.component')
      .then(({ CreateFollowUpDialogComponent }) => {
        this.ngxLoader.stop();

        this.dialog.open(CreateFollowUpDialogComponent, {
          width: '500px',
          data: { enquiryId }
        });
      })
      .catch(err => {
        console.error('Error loading dialog:', err);
        this.ngxLoader.stop();
      });
  }
}
