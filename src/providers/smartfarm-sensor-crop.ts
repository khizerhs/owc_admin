import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { SensorCrop } from '../models/sensorCrop';

/*
  Generated class for the SmartfarmSensorCrop provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SmartfarmSensorCrop {

  smartfarmApiUrl = 'http://localhost:3000';

  constructor(public http: Http) {
    console.log('Hello SmartfarmSensorCrop Provider');
  }

   load(): Observable<SensorCrop[]> {
    return this.http.get(`${this.smartfarmApiUrl}/crop-user`)
      .map(res => <SensorCrop[]>res.json());
  }



}
