import {Component, OnInit} from '@angular/core';
import {SampleDataService} from '../../services/data.service';

@Component({
  selector: 'app-sample-action',
  template: `{{ data }}`,
  providers: [SampleDataService]
})
export class ActionComponent implements OnInit {

  constructor(private service: SampleDataService) {}

  title = 'Action';
  data: String;
  error = null;

  ngOnInit(): void {
    this.service.action().then(n => {
      this.data = n.payload;
      this.error = null;
    }).catch( e => this.error = 'An error occurred');
  }

}
