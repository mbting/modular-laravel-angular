import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AuthRequest} from '../../models/authrequest.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = null;
  authRequest = new AuthRequest();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.auth.token()) {
      this.success();
    }
  }

  login() {
    this.error = null;
    this.auth.login(this.authRequest).then( r => {
      if (r.code === 0) { this.success(); } else {
        this.error = r.payload.toString();
      }
    });
  }

  success() {
    this.router.navigate(['/']);
  }

}
