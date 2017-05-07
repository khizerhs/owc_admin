import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Crop} from '../models/crop';

/*
  Generated class for the SmartfarmCrops provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SmartfarmCrops {

  smartfarmApiUrl = 'https://sjsusmartfarm-backend.herokuapp.com';

  constructor(public http: Http) {
    console.log('Hello SmartfarmCrop Provider');
  }

    load(): Observable<Crop[]> {
    return this.http.get(`${this.smartfarmApiUrl}/crops`)
      .map(res => <Crop[]>res.json());
  }

  save(createFormData) {
    JSON.stringify(createFormData);
    return this.http.post(`${this.smartfarmApiUrl}/crops`,createFormData);
  }

    update(updateFormData, id){
    JSON.stringify(updateFormData);
    return this.http.put(`${this.smartfarmApiUrl}/crops/${id}`,updateFormData);
  }

  delete(id){
    return this.http.delete(`${this.smartfarmApiUrl}/crops/${id}`);
  }

}
