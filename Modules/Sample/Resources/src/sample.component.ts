import {Component, OnInit} from '@angular/core';
import {SampleDataService} from './services/data.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  providers: [SampleDataService]
})
export class SampleComponent implements OnInit {

  constructor(private service: SampleDataService) {}

  title = 'Sample';
  data: number[];
  error = null;

  ngOnInit(): void {
    this.service.get().then(n => {
      this.data = n;
      this.error = null;
    }).catch( e => this.error = 'An error occurred')
  }

}
