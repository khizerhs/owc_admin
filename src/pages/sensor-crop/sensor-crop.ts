import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SensorCrop } from '../../models/sensorCrop';
import { SmartfarmSensorCrop } from '../../providers/smartfarm-sensor-crop';

import { SensorCropDetailsPage } from '../sensor-crop-details/sensor-crop-details';
/**
 * Generated class for the SensorCrop page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sensor-crop',
  templateUrl: 'sensor-crop.html',
})
export class SensorCropPage {

  sensorCrops: SensorCrop[];
  smartFarmSensorCrop: SmartfarmSensorCrop;

  constructor(public navCtrl: NavController, private smartfarmSensorCrop: SmartfarmSensorCrop) {
  	this.smartFarmSensorCrop = smartfarmSensorCrop;
  }

  goToDetails(sensorCrop: SensorCrop){
  	console.log('will go to cropuser details');
  	console.log({sensorCrop});
  	this.navCtrl.push(SensorCropDetailsPage, {sensorCrop});
  }

  goToAssignSensor(sensorCrop: SensorCrop){
  console.log('This will go to assign sensor page');
  	//this.navCtrl.push(AssignSensorPage,{sensorCrop});
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad SensorCrops');;
    this.smartFarmSensorCrop.load().subscribe(sensorCrops => {
    	this.sensorCrops = sensorCrops;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorCrop');
  }

}
