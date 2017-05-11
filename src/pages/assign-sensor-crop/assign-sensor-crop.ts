import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../../models/sensor';
import { SensorCrop } from '../../models/sensorCrop';
import { SensorChecked } from '../../models/sensorChecked';
import { AlertController, LoadingController, Loading } from 'ionic-angular';
import { SmartfarmSensorCrop } from '../../providers/smartfarm-sensor-crop';
import { SmartfarmSensors } from '../../providers/smartfarm-sensors';



/**
 * Generated class for the AssignSensorCrop page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-assign-sensor-crop',
  templateUrl: 'assign-sensor-crop.html',
})
export class AssignSensorCropPage {
	loading: Loading;
	sensors: Sensor[];
	sensorsChecked: SensorChecked[];
	sensorChecked: SensorChecked;
	smartFarmSensorCrop: SmartfarmSensorCrop;
	smartFarmSensors: SmartfarmSensors;
	checkedItems:boolean[];
	sensorIds: string[];
	sensoCrop: SensorCrop;
  responseCode;

  constructor(public navCtrl: NavController, public navParams: NavParams, private smartfarmSensorCrop: SmartfarmSensorCrop, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private smartfarmSensors: SmartfarmSensors) {
  	 this.sensors = navParams.get('sensors');
  	 this.sensoCrop = navParams.get('sensoCrop');
  	 this.smartFarmSensorCrop = smartfarmSensorCrop;
  	 this.smartFarmSensors = smartfarmSensors;
  	 this.sensorsChecked = [];
  	 this.sensorChecked = {"_id":"", name:"", "sensor_type":"", "description":"", "isChecked":false};
  	 this.checkedItems = [];
  	 this.sensorIds = [];
     this.responseCode = 0;
    }

  ionViewWillEnter(){
  	console.log("Entering");	
  	this.showLoading();
  	this.smartFarmSensors.load().subscribe(sensors => {
  		if(sensors == null){
  		 	this.showError("Cannot get Sensors from the server");
    	} else {
			setTimeout(() => {
         		this.loading.dismiss();
    			for(let allSensor of sensors){

    				this.sensorsChecked.push({"name":allSensor.name, "sensor_type":allSensor.sensor_type,
    											"_id":allSensor._id, "description":allSensor.description,
    											"isChecked":this.sensorIsChecked(allSensor)})
	   				console.log("Sensors Checked")
    				console.log(this.sensorsChecked);
    				this.checkedItems = new Array(this.sensorsChecked.length);
    			}

    		});	
    	}
  	});
  }


  update(){
  	this.sensorIds = [];
  	for(let s of this.sensorsChecked)
  	{
  		if(s.isChecked){
  			this.sensorIds.push(s._id);
  		}
  	}
    console.log(this.sensoCrop._id);
  	console.log(this.sensorIds);
  	this.showLoading();
  	this.smartFarmSensorCrop.update(this.sensorIds, this.sensoCrop._id)
  		.subscribe(data => {	
  								this.responseCode = data.status;
  								if(this.responseCode == 200){
  									setTimeout(() => {
  									this.loading.dismiss();
  									this.navCtrl.pop();
                    this.navCtrl.pop();
  									});
  								}
  							 },
  							error => { 
  							this.showError(error); 
  						} 
  					);
  	
  }

  toggle(sens: SensorChecked)
  {
  	for(let senso of this.sensorsChecked)
  	{
  		if(sens._id == senso._id){
  			if(this.sensorsChecked.indexOf(senso) === -1){
  				console.log("Not found");	
  			}
  			else{
  				if(this.sensorsChecked[this.sensorsChecked.indexOf(senso)].isChecked == true ){
  					this.sensorsChecked[this.sensorsChecked.indexOf(senso)].isChecked = false;
  					console.log(this.sensorsChecked);
  					return;
  				}
  				else{
  					this.sensorsChecked[this.sensorsChecked.indexOf(senso)].isChecked = true;
  					console.log(this.sensorsChecked);
  					return;	
  				}
  			}
  		}
  	}
  }

  ionViewDidLoad() {
    
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

  sensorIsChecked(sen: Sensor){
  	for(let sens of this.sensors){
  		if(sen._id == sens._id){
  			return true;
  		}
  	}
  	return false;
  }
}
