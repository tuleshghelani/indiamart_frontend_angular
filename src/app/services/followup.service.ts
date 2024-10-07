import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FollowUpService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createFollowUp(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/follow-up/create/`, payload);
  }
}
