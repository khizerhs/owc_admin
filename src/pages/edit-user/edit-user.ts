import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SmartfarmUsers } from '../../providers/smartfarm-users';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the EditUser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {

	editUserForm: FormGroup;
	smartfarmUsers: SmartfarmUsers;
	responseCode;

  user : User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private smartFarmUsers: SmartfarmUsers, public alertCtrl: AlertController) {
  	this.user = navParams.get('toEditUser');
  	this.editUserForm = formBuilder.group({
        name: [this.user.name],
        login: [this.user.login],
        pass: [this.user.pass],
        address: [this.user.address],
        phone: [this.user.phone],
        admin: [this.user.admin] 
    });
   this.smartfarmUsers = smartFarmUsers;
   this.responseCode = 0;
  }

  update(){
	console.log("Updating");
  	console.log(this.editUserForm.value);
  	this.smartfarmUsers.update(this.editUserForm.value, this.user._id)
  		.subscribe(data => {	
  								this.responseCode = data.status;
  								if(this.responseCode == 200){
  									this.showUpdateSuccessAlert();
  									this.navCtrl.pop();
  									this.navCtrl.pop();
  								}
  							 },
  							error => { console.log("something Went Wrong") } 
  					);
  	  }

	showUpdateSuccessAlert() {	
	    let alert = this.alertCtrl.create({
	      title: 'Success!',
	      subTitle: 'User has been Updated.',
	      buttons: ['OK']
	    });
	    alert.present();
	  }

  ionViewDidLoad() {
    console.log(this.user);
  }

}
