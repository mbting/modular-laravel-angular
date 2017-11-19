import {Injectable} from '@angular/core';
import {HttpService} from '../../../../../resources/src/app/services/http.service';

@Injectable()
export class SampleDataService {

  constructor(private http: HttpService) {}

  get() {
    return this.http.get('sample');
  }
}
