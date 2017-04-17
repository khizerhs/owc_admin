import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SmartfarmUsers } from '../../providers/smartfarm-users';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CreateUser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})

export class CreateUserPage {
	createUserForm: FormGroup;
	smartfarmUsers: SmartfarmUsers;
	responseCode;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, private smartFarmUsers: SmartfarmUsers, public alertCtrl: AlertController) {
  	this.createUserForm = formBuilder.group({
        name: [''],
        login: [''],
        pass: [''],
        address: [''],
        phone: [''],
        admin: [''] 
    });
   this.smartfarmUsers = smartFarmUsers;
   this.responseCode = 0;
  }

  save(){
	console.log("saving");
  console.log(this.createUserForm.value);
  	this.smartfarmUsers.save(this.createUserForm.value)
  		.subscribe(data => { this.responseCode = data.status;
                            if(this.responseCode == 201){
                              this.showCreateSuccessAlert();
                              this.navCtrl.pop();
                            } 
                          },
  							error => { console.log("something Went Wrong") } 
  					);
  }

	showCreateSuccessAlert() {	
	    let alert = this.alertCtrl.create({
	      title: 'Success!',
	      subTitle: 'User has been created.',
	      buttons: ['OK']
	    });
	    alert.present();
	  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUser');
  }
}
