import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

/**
 * Generated class for the UserDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
	
	user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetails');
  }

}
