import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    // this.getTest();
    // console.log('data1111 : ', this.baseUrl);
    return this.http.post(`${this.baseUrl}/api/user/login/`, { username, password });
  }

  public getTest() {
    this.http.get(`${this.baseUrl}/api/hello/`).subscribe((data) => {
      console.log('data : ', data);
    });
    console.log('data222 : ', this.baseUrl);
    return this.http.get(`${this.baseUrl}`);
  }
}
