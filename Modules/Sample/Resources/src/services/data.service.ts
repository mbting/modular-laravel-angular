import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SampleDataService {

  constructor(private http: Http) {}

  private url = 'http://localhost:8000/api/sample';

  get(): Promise<number[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json());
  }
}
