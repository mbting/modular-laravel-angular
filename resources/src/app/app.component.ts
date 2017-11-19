import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sidebar = false;

  constructor(private auth: AuthService) {
    this.auth.authenticatedEvent.subscribe( e => this.sidebar = e );
  }

  ngOnInit() {
    if (this.auth.token()) { this.sidebar = true; }
  }

}
