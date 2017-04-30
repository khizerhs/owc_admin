import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../../models/sensor';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SmartfarmSensors } from '../../providers/smartfarm-sensors';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the CreateSensor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-sensor',
  templateUrl: 'create-sensor.html',
})
export class CreateSensorPage {

	createSensorForm: FormGroup;
	smartfarmSensors: SmartfarmSensors;
	responseCode;


  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, private smartFarmSensors: SmartfarmSensors, public alertCtrl: AlertController) {
  	this.createSensorForm = formBuilder.group({
  		name:[''],
  		description:[''],
  		sensor_type:[''],
  	});
  	this.smartfarmSensors = smartFarmSensors;
  	this.responseCode = 0;
  }

   save(){
	console.log("saving");
  	console.log(this.createSensorForm.value);
  	this.smartfarmSensors.save(this.createSensorForm.value)
  		.subscribe(data => { this.responseCode = data.status;
                            if(this.responseCode == 201){
                              this.showCreateSuccessAlert();
                              this.navCtrl.pop();
                            } 
                          },
  							error => { console.log("something Went Wrong") } 
  					);
  }

  showCreateSuccessAlert() {	
	    let alert = this.alertCtrl.create({
	      title: 'Success!',
	      subTitle: 'Sensor has been created.',
	      buttons: ['OK']
	    });
	    alert.present();
	  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSensor');
  }

}
