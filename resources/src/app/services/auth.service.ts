import {EventEmitter, Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {HttpService} from './http.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private storage: StorageService, private http: HttpService, private router: Router) {
    this.http.unauthorizedEvent.subscribe( e => this.afterLogout() );
  }

  public authenticatedEvent: EventEmitter<boolean> = new EventEmitter();

  user() {
    return this.storage.get('user');
  }

  login(data) {
    return this.http.post('login', data).then(r => {
      if (r.code === 0) {
        this.storage.set('user', r.payload);
        this.authenticatedEvent.emit(true);
      }
      return r;
    });
  }

  logout() {
    return this.http.get('logout').then( r => {
      if (r.code === 0) {
        this.afterLogout();
      }
    });
  }

  afterLogout() {
    this.storage.clear();
    this.authenticatedEvent.emit(false);
    this.router.navigate(['/', 'login']);
  }

}
