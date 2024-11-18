import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  searchEnquiries(params: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/enquiry/search-enquiries/`, params);
  }

  downloadEnquiries(params: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/enquiry/download-enquiries-excel/`, params, { responseType: 'blob' });
  }


  getEnquiryDetails(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/enquiry/get-enquiry-details/`, { id });
  }
}
