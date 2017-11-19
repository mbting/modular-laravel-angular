import {EventEmitter, Injectable} from '@angular/core';
import {Alert} from '../models/alert.model';

@Injectable()
export class AlertService {

  alert = new Alert();

  public alertEvent: EventEmitter<Alert> = new EventEmitter();

  success(text) {
    this.alert.level = 'alert-success';
    this.alert.text = text;
    this.alertEvent.emit(this.alert);
  }

  danger(text) {
    this.alert.level = 'alert-danger';
    this.alert.text = text;
    this.alertEvent.emit(this.alert);
  }

  warning(text) {
    this.alert.level = 'alert-warning';
    this.alert.text = text;
    this.alertEvent.emit(this.alert);
  }

  info(text) {
    this.alert.level = 'alert-info';
    this.alert.text = text;
    this.alertEvent.emit(this.alert);
  }

}
