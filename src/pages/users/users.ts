import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { User } from '../../models/user';

import { SmartfarmUsers } from '../../providers/smartfarm-users';

import { CreateUserPage } from '../create-user/create-user';
import { UserDetailsPage } from '../user-details/user-details';

/**
 * Generated class for the Users page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

	users: User[]
	smartFarmUsers: SmartfarmUsers;

  constructor(public navCtrl: NavController, private smartfarmUsers: SmartfarmUsers) {
   	this.smartFarmUsers = smartfarmUsers;
  }

  goToDetails(user: User){
  	this.navCtrl.push(UserDetailsPage, {user});
  }

  goToCreate(){
  	this.navCtrl.push(CreateUserPage)
  }

  ionViewWillEnter(){
  	console.log("will enter");
  	this.smartFarmUsers.load().subscribe(users => {
  	this.users = users;
  	})	
  }
}
