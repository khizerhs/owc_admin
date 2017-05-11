import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Sensor} from '../models/sensor';

/*
  Generated class for the SmartfarmSensors provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SmartfarmSensors {

	smartfarmApiUrl = 'https://sjsusmartfarm-backend.herokuapp.com';

  constructor(public http: Http) {
    console.log('Hello SmartfarmSensors Provider');
  }

   load(): Observable<Sensor[]> {
    return this.http.get(`${this.smartfarmApiUrl}/sensors`)
      .map(res => <Sensor[]>res.json());
  }

  save(createFormData) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    JSON.stringify(createFormData);
    return this.http.post(`${this.smartfarmApiUrl}/sensors`,createFormData,  {headers:headers});
  }

  update(updateFormData, id){
  let headers = new Headers({ 'Content-Type': 'application/json' });
    JSON.stringify(updateFormData);
    return this.http.put(`${this.smartfarmApiUrl}/sensors/${id}`,updateFormData,  {headers:headers});
  }

  delete(id){
    return this.http.delete(`${this.smartfarmApiUrl}/sensors/${id}`);
  }

}
