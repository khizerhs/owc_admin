import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {User} from '../models/user';

/*
  Generated class for the SmartfarmUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SmartfarmUsers {

  smartfarmApiUrl = 'https://sjsusmartfarm-backend.herokuapp.com';

  constructor(public http: Http) {
    console.log('Hello SmartfarmUsers Provider');
  }

    load(): Observable<User[]> {
    return this.http.get(`${this.smartfarmApiUrl}/users`)
      .map(res => <User[]>res.json());
  }

  save(createFormData) {
    JSON.stringify(createFormData);
    return this.http.post(`${this.smartfarmApiUrl}/users`,createFormData);
  }

  update(updateFormData, id){
    JSON.stringify(updateFormData);
    return this.http.put(`${this.smartfarmApiUrl}/users/${id}`,updateFormData);
  }

  delete(id){
    return this.http.delete(`${this.smartfarmApiUrl}/users/${id}`);
  }

   public login(credentials) {
    if (credentials.name === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        var url = this.smartfarmApiUrl + '/users/login';
        var data = JSON.stringify({name: credentials.name, password: credentials.password})
        let headers = new Headers({ 'Content-Type': 'application/json' });

        this.http.post(url, data, {headers:headers})
          .subscribe(data => {
          
           // if (200 === data.status) {
           //  this.shareService.user_info = data.json()
           // }

            observer.next(200 === data.status);
            observer.complete();
           }, error => {
             observer.next(false);
             observer.complete();
           });
      });
    }
  }

}
