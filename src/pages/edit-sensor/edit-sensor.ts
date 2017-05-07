import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../../models/sensor';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SmartfarmSensors } from '../../providers/smartfarm-sensors';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the EditSensor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-sensor',
  templateUrl: 'edit-sensor.html',
})
export class EditSensorPage {

  editSensorForm: FormGroup;
  smartfarmSensors: SmartfarmSensors;
  responseCode;

  sensor : Sensor;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private smartFarmSensors: SmartfarmSensors, public alertCtrl: AlertController) {
  	this.sensor = navParams.get('toEditSensor');
  	this.editSensorForm = formBuilder.group({
        name: [this.sensor.name],
        description: [this.sensor.description],
        sensor_type: [this.sensor.sensor_type]
    });
   this.smartfarmSensors = smartFarmSensors;
   this.responseCode = 0;
  }

  update(){
	console.log("Updating");
  	console.log(this.editSensorForm.value);
  	this.smartfarmSensors.update(this.editSensorForm.value, this.sensor._id)
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
	      subTitle: 'Sensor has been Updated.',
	      buttons: ['OK']
	    });
	    alert.present();
	  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditSensor');
  }

}
