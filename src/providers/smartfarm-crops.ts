import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Crop} from '../models/crop';
import {Stage} from '../models/stage';

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

    loadstages(id): Observable<Stage[]> {
      console.log(id)
    return this.http.get(`${this.smartfarmApiUrl}/cropstage/${id}`)
      .map(res => <Stage[]>res.json());
  }

  save(createFormData) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    JSON.stringify(createFormData);
    return this.http.post(`${this.smartfarmApiUrl}/crops`,createFormData, {headers:headers});
  }

  saveStage(createFormData) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    JSON.stringify(createFormData);
    return this.http.post(`${this.smartfarmApiUrl}/cropstage`,createFormData, {headers:headers});
  }

  update(updateFormData, id){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    JSON.stringify(updateFormData);
    return this.http.put(`${this.smartfarmApiUrl}/crops/${id}`,updateFormData, {headers:headers});
  }

  updateStage(updateFormData){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    JSON.stringify(updateFormData);
    return this.http.put(`${this.smartfarmApiUrl}/cropstage`,updateFormData, {headers:headers});
  }

  delete(id){
    return this.http.delete(`${this.smartfarmApiUrl}/crops/${id}`);
  }

  deleteStage(id){
    return this.http.delete(`${this.smartfarmApiUrl}/cropstage/${id}`);
  }

}
