import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = null;

  constructor(private auth: AuthService, private router: Router) {
    this.auth.authenticatedEvent.subscribe( e => {
      if (e) { this.user = this.auth.user();
      } else { this.user = null; }
    });
  }

  ngOnInit() {
    if (this.auth.token()) { this.user = this.auth.user(); }
  }

  logout() {
    this.auth.logout().then( e => {
      this.router.navigate(['/', 'login']);
    });
  }

}
