import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

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
    if (this.auth.user()) { this.user = this.auth.user(); }
  }

  logout() {
    this.auth.logout().then( e => {
      this.router.navigate(['/', 'login']);
    });
  }

}
