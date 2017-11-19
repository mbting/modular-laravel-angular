import {EventEmitter, Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {HttpService} from './http.service';

@Injectable()
export class AuthService {

  constructor(private storage: StorageService, private http: HttpService) {}

  public authenticatedEvent: EventEmitter<boolean> = new EventEmitter();

  token() {
    return this.storage.get('token');
  }

  user() {
    return this.storage.get('user');
  }

  login(data) {
    return this.http.post('login', data).then(r => {
      if (r.code === 0) {
        this.storage.set('user', r.payload);
        this.storage.set('token', r.payload.token);
        this.authenticatedEvent.emit(true);
      }
      return r;
    });
  }

  logout() {
    return this.http.get('logout').then( r => {
      if (r.code === 0) {
        this.storage.clear();
        this.authenticatedEvent.emit(false);
      }
    });
  }

}
