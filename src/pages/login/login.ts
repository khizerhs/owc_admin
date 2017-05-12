import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { AlertController, LoadingController, Loading } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { SmartfarmUsers } from '../../providers/smartfarm-users';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loading: Loading;
	 registerCredentials = {name: '', password: ''};

  constructor(public navCtrl: NavController, private smartfarmUsers: SmartfarmUsers, 
              private loadingCtrl: LoadingController, private alertCtrl: AlertController, public menu: MenuController,) {
              this.menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  loginSelected() {
      this.showLoading();

      this.smartfarmUsers.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          setTimeout(() => {
          this.loading.dismiss();
          this.menu.enable(true);
          this.navCtrl.setRoot(UsersPage)
          });
        } else {
          this.showError("Login failed");
        }
      },
      error => {
        this.showError(error);
      });
  }

   showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }


}
