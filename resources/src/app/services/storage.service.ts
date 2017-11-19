import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  get(key: string): Object {
    try {
      let data = JSON.parse(localStorage.getItem(key));
      return data;
    } catch (e) {
      console.log('unable to get item : ' + key);
      return null;
    }
  }

  set(key: string, data: Object): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (e) {
      console.log('unable to set item : ' + key);
      return false;
    }
  }

  clear(): void {
    localStorage.clear();
  }

}
