import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Crop } from '../../models/crop';
import { CropDetailsPage } from '../crop-details/crop-details';
import { CreateCropPage } from '../create-crop/create-crop';
import { SmartfarmCrops } from '../../providers/smartfarm-crops';

/**
 * Generated class for the Crops page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-crops',
  templateUrl: 'crops.html',
})
export class CropsPage {
	
  crops: Crop[]
	smartFarmCrops: SmartfarmCrops;

  constructor(public navCtrl: NavController, private smartfarmCrops: SmartfarmCrops) {
   	this.smartFarmCrops = smartfarmCrops;
  }

  goToDetails(crop: Crop){
  	this.navCtrl.push(CropDetailsPage, {crop});
  }

  goToCreate(){
  	this.navCtrl.push(CreateCropPage)
  }

  ionViewWillEnter(){
  	console.log("will enter");
  	this.smartFarmCrops.load().subscribe(crops => {
  	this.crops = crops;
  	})	
  }

}
