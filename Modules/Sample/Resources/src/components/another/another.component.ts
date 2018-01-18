import {Component, OnInit} from '@angular/core';
import {SampleDataService} from '../../services/data.service';

@Component({
  selector: 'app-sample-another',
  template: `{{ data }}`,
  providers: [SampleDataService]
})
export class AnotherComponent implements OnInit {

  constructor(private service: SampleDataService) {}

  title = 'Another';
  data: String;
  error = null;

  ngOnInit(): void {
    this.service.another().then(n => {
      this.data = n.payload;
      this.error = null;
    }).catch( e => this.error = 'An error occurred');
  }

}
