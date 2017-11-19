import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConfigService} from './config.service';
import {ApiResponse} from '../models/apiresponse.model';

@Injectable()
export class HttpService {

  base = null;

  constructor(private http: HttpClient, config: ConfigService) {
    this.base = config.baseURL;
  }

  get(url: string): Promise<ApiResponse> {
    return this.http.get(this.base + url).toPromise().catch( e => this.onError(e) );
  }

  post(url: string, data: Object): Promise<ApiResponse> {
    return this.http.post(this.base + url, data).toPromise().catch( e => this.onError(e) );
  }

  private onError(e) {
    console.log(e.message);
  }

}
