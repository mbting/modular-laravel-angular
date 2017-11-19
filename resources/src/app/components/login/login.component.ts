import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AuthRequest} from '../../models/authrequest.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = null;
  authRequest = new AuthRequest();

  constructor(private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.token()) { console.log('logged in'); } else {
      console.log('not logged');
    }
  }

  login() {
    this.error = null;
    this.auth.login(this.authRequest).then( r => {
      if (r.code === 0) { console.log('logged in'); } else {
        this.error = r.payload.toString();
      }
    });
  }

}
