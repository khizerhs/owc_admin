import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Crop } from '../../models/crop';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SmartfarmCrops } from '../../providers/smartfarm-crops';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EditCrop page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-crop',
  templateUrl: 'edit-crop.html',
})
export class EditCropPage {

  editCropForm: FormGroup;
	smartfarmCrops: SmartfarmCrops;
	responseCode;

  crop : Crop;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private smartFarmCrops: SmartfarmCrops, public alertCtrl: AlertController) {
    this.crop = navParams.get('toEditCrop');
  	this.editCropForm = formBuilder.group({
        name: [this.crop.name],
        description: [this.crop.description],
    });
   this.smartfarmCrops = smartFarmCrops;
   this.responseCode = 0;
}

  update(){
	console.log("Updating");
  	console.log(this.editCropForm.value);
  	this.smartfarmCrops.update(this.editCropForm.value, this.crop._id)
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
	      subTitle: 'Crop has been Updated.',
	      buttons: ['OK']
	    });
	    alert.present();
	  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCrop');
  }

}
