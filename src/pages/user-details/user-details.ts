import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { EditUserPage } from '../edit-user/edit-user';
import { SmartfarmUsers } from '../../providers/smartfarm-users';
import { AlertController } from 'ionic-angular';

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
  smartfarmUsers: SmartfarmUsers;
  responseCode;

  constructor(public navCtrl: NavController, public navParams: NavParams, private smartFarmUsers: SmartfarmUsers, public alertCtrl: AlertController) {
  	this.user = navParams.get('user');
    this.smartfarmUsers = smartFarmUsers;
    this.responseCode = 0;
  }

  goToEdit(toEditUser: User){
    console.log('Will go to edit page');
    this.navCtrl.push(EditUserPage,{ toEditUser});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetails');
  }

  deleteUser(toDeleteUser: User){
    console.log(toDeleteUser);
    this.smartfarmUsers.delete(toDeleteUser._id)
      .subscribe(data => {  
                  this.responseCode = data.status;
                  if(this.responseCode == 200){
                    this.showDeleteSuccessAlert();
                    this.navCtrl.pop();
                  }
                 },
                error => { console.log("something Went Wrong") } 
            );
      }

  showDeleteSuccessAlert() {  
      let alert = this.alertCtrl.create({
        title: 'Success!',
        subTitle: 'User has been Deleted.',
        buttons: ['OK']
      });
      alert.present();
    }

}

