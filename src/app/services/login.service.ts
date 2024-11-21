import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/user/login/`, { username, password }).pipe(
      tap((response: any) => {
        if (response.ACCESS_TOKEN) {
          localStorage.setItem('ACCESS_TOKEN', response.ACCESS_TOKEN);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('ACCESS_TOKEN');
  }

  logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('ACCESS_TOKEN');
  }
}
