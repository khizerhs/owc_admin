import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

  smartfarmApiUrl = 'http://localhost:3000';

  constructor(public http: Http) {
    console.log('Hello SmartfarmUsers Provider');
  }

    load(): Observable<User[]> {
    return this.http.get(`${this.smartfarmApiUrl}/users`)
      .map(res => <User[]>res.json());
  }

}
