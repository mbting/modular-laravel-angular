import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthCheck implements CanActivate {
  constructor(private auth: AuthService) {}
  canActivate(): boolean {
    if (this.auth.user()) {
      return true;
    } else {
      this.auth.afterLogout();
      return false;
    }
  }
}
