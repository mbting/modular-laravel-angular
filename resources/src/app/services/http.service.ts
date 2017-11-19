import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiResponse} from '../models/apiresponse.model';
import {ConfigService} from './config.service';
import {AlertService} from './alert.service';
import {StorageService} from './storage.service';

@Injectable()
export class HttpService {

  base = null;

  constructor(private http: HttpClient, config: ConfigService, private alert: AlertService, private storage: StorageService) {
    this.base = config.baseURL;
  }

  get(url: string): Promise<ApiResponse> {
    return this.http.get(this.base + url).toPromise().catch( e => this.onError(e) );
  }

  post(url: string, data: Object): Promise<ApiResponse> {
    return this.http.post(this.base + url, data).toPromise().catch( e => this.onError(e) );
  }

  private onError(e) {
    this.alert.danger(e.message);
  }

}
