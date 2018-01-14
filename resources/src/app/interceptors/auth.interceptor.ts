import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {StorageService} from '../services/storage.service';
import {User} from '../models/user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public storage: StorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = <User>this.storage.get('user');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${user ? user.token : null}`
      }
    });
    return next.handle(request);
  }
}
