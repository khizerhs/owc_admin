import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Optional} from '@angular/core';

import { SensorCrop } from '../../models/sensorCrop';
import { Sensor } from '../../models/sensor';
import { SmartfarmSensorCrop } from '../../providers/smartfarm-sensor-crop';

import { AssignSensorCropPage } from '../assign-sensor-crop/assign-sensor-crop';
/**
 * Generated class for the SensorCropDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sensor-crop-details',
  templateUrl: 'sensor-crop-details.html',
})
export class SensorCropDetailsPage {
  sensors: Sensor[];
  sensorCrop: SensorCrop;
  smartFarmSensorCrop: SmartfarmSensorCrop;

  constructor(public navCtrl: NavController, public navParams: NavParams, private smartfarmSensorCrop: SmartfarmSensorCrop) {
    this.sensors = [];
  	this.smartFarmSensorCrop = smartfarmSensorCrop;
  	this.sensorCrop = navParams.get('sensorCrop');
  }

  ionViewWillEnter(){
  	console.log("will enter");
  	this.sensors = [];
  	for(let sensorId of this.sensorCrop.sensors){
  		this.smartFarmSensorCrop.getSensor(sensorId).subscribe(sensor => {
  			console.log(sensor);
  			this.sensors.push(sensor);
  		})
  	}	
  }

  goToAddSensor(sensors: Sensor[]){
  	this.navCtrl.push(AssignSensorCropPage, {sensors})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorCropDetails');
  }

}
