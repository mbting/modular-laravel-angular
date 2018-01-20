import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  nav = [];

  constructor(private auth: AuthService, private http: HttpService) {}

  ngOnInit() {
    if (this.auth.user()) {
      this.http.get('sidebar').then( r => {
        this.nav = r.payload;
      });
    }
  }

}
