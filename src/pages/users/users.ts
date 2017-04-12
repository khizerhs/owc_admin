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

  constructor(public navCtrl: NavController, private smartfarmUsers: SmartfarmUsers) {
  	smartfarmUsers.load().subscribe(users => {
  	this.users = users;
  	})
  }

  goToDetails(user: User){
  	this.navCtrl.push(UserDetailsPage, {user});
  }

  goToCreate(){
  	this.navCtrl.push(CreateUserPage)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Users');
  }

}
