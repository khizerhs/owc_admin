import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../../models/sensor';
import { EditSensorPage } from '../edit-sensor/edit-sensor';
import { SmartfarmSensors } from '../../providers/smartfarm-sensors';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the SensorDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sensor-details',
  templateUrl: 'sensor-details.html',
})
export class SensorDetailsPage {

  sensor: Sensor;
  smartfarmSensors: SmartfarmSensors;
  responseCode;

  constructor(public navCtrl: NavController, public navParams: NavParams, private smartFarmSensors: SmartfarmSensors, public alertCtrl: AlertController) {
  	this.sensor = navParams.get('sensor');
    this.smartfarmSensors = smartFarmSensors;
    this.responseCode = 0;
  }

  goToEdit(toEditSensor: Sensor){
    console.log('Will go to edit page');
    this.navCtrl.push(EditSensorPage,{ toEditSensor});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorDetails');
  }

}
