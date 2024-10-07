import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private whitelistedUrls: string[] = [
    '/api/user/login/',
    // Add other whitelisted URLs here
  ];

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.isWhitelisted(request.url)) {
      return next.handle(request);
    }

    const token = this.loginService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }

  private isWhitelisted(url: string): boolean {
    return this.whitelistedUrls.some(whitelistedUrl => url.includes(whitelistedUrl));
  }
}
