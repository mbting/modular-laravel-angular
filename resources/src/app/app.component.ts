import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {AlertService} from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sidebar = false;
  alert = null;

  constructor(private auth: AuthService, alertService: AlertService) {
    this.auth.authenticatedEvent.subscribe( e => this.sidebar = e );
    alertService.alertEvent.subscribe( e => this.alert = e );
  }

  ngOnInit() {
    if (this.auth.token()) { this.sidebar = true; }
  }

}
