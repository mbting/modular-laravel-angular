import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {StorageService} from './storage.service';

@Injectable()
export class AuthCheck implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}
  canActivate(): boolean {
    if (this.storage.get('token')) {
      return true;
    } else {
      this.router.navigate(['/', 'login']);
      return false;
    }
  }
}
