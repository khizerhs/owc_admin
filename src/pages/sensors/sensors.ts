import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { Sensor } from '../../models/sensor';

import { SmartfarmSensors } from '../../providers/smartfarm-sensors';

import { CreateSensorPage } from '../create-sensor/create-sensor';
import { SensorDetailsPage } from '../sensor-details/sensor-details';

/**
 * Generated class for the Sensors page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html',
})
export class SensorsPage {
	
	sensors: Sensor[];
	smartFarmSensors: SmartfarmSensors;

  constructor(public navCtrl: NavController, private smartfarmSensors: SmartfarmSensors) {
  	this.smartFarmSensors = smartfarmSensors;
  }

  goToDetails(sensor: Sensor){
  	console.log('will go to sensor details');
  	console.log({sensor});
  	this.navCtrl.push(SensorDetailsPage, {sensor});
  }

  goToCreate(){
  	this.navCtrl.push(CreateSensorPage)
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad Sensors');;
    this.smartFarmSensors.load().subscribe(sensors => {
    	this.sensors = sensors;
    })
  }

}
