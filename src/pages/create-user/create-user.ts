import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { FormBuilder, FormGroup } from "@angular/forms";

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
	newUser: User;
	createUserForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
  	this.createUserForm = formBuilder.group({
        name: [''],
        login: [''],
        pass: [''],
        address: [''],
        phone: [''],
        admin: [''] 
    });
 
  }

  save(){
  console.log("saving");
  console.log(this.createUserForm.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUser');
  }

}
