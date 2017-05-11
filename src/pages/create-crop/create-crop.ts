import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SmartfarmCrops } from '../../providers/smartfarm-crops';
import { AlertController, LoadingController, Loading } from 'ionic-angular';


/**
 * Generated class for the CreateCrop page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-crop',
  templateUrl: 'create-crop.html',
})
export class CreateCropPage {
  loading: Loading;
	createCropForm: FormGroup;
	smartfarmCrops: SmartfarmCrops;
	responseCode;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder, private smartFarmCrops: SmartfarmCrops, private loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  this.createCropForm = formBuilder.group({
        name: [''],
        description : ['']
    });
   this.smartfarmCrops = smartFarmCrops;
   this.responseCode = 0;
}

  save(){
  this.showLoading();
	console.log("saving");
  console.log(this.createCropForm.value);
  	this.smartfarmCrops.save(this.createCropForm.value)
  		.subscribe(data => { this.responseCode = data.status;
                            if(this.responseCode == 201){
                              setTimeout(() => {
                              this.loading.dismiss();
                              this.showCreateSuccessAlert();
                              this.navCtrl.pop();
                              }); 
                            }
                          },
  							error => { 
                this.showError(error);
                console.log("something Went Wrong"); 
                } 
  					);
  }

	showCreateSuccessAlert() {	
	    let alert = this.alertCtrl.create({
	      title: 'Success!',
	      subTitle: 'Crop has been created.',
	      buttons: ['OK']
	    });
	    alert.present();
	  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCrop');
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
