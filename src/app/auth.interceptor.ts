import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.authService.getToken();
      req = req.clone({
          setHeaders: {
              Authorization: "Bearer " + authToken
          }
      });
      return next.handle(req);
  }
}
