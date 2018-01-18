import {Injectable} from '@angular/core';
import {HttpService} from '../../../../../resources/src/app/services/http.service';

@Injectable()
export class SampleDataService {

  constructor(private http: HttpService) {}

  private base = 'sample';

  get() {
    return this.http.get(this.base);
  }

  action() {
    return this.http.get(this.base + '/action');
  }

  another() {
    return this.http.get(this.base + '/another');
  }
}
