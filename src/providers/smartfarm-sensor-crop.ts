import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { SensorCrop } from '../models/sensorCrop';

import {Sensor} from '../models/sensor';


/*
  Generated class for the SmartfarmSensorCrop provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SmartfarmSensorCrop {

  smartfarmApiUrl = 'https://sjsusmartfarm-backend.herokuapp.com';

  constructor(public http: Http) {
    console.log('Hello SmartfarmSensorCrop Provider');
  }

   load(): Observable<SensorCrop[]> {
    return this.http.get(`${this.smartfarmApiUrl}/crop-user`)
      .map(res => <SensorCrop[]>res.json());
  }

  getSensor(sensorId):Observable<Sensor>{
    return this.http.get(`${this.smartfarmApiUrl}/sensors/${sensorId}`)
    .map(res => <Sensor>res.json());
  }

  update(sensorIds, id){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(JSON.stringify({"sensors":sensorIds}));
    return this.http.put(`${this.smartfarmApiUrl}/crop-user/${id}`, JSON.stringify({"sensors":sensorIds}), {headers:headers});
  }



}
