import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmartfarmCrops } from '../../providers/smartfarm-crops';
import { AlertController } from 'ionic-angular';
import { Stage } from '../../models/stage';
import { Crop } from '../../models/crop';
import { FormBuilder, FormGroup } from "@angular/forms";

/**
 * Generated class for the CreateStage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-stage',
  templateUrl: 'create-stage.html',
})
export class CreateStagePage {

  createStageForm: FormGroup;
	smartfarmCrops: SmartfarmCrops;
	responseCode;
  stage: Stage;
  crop: Crop;


  constructor(public navCtrl: NavController, public navParams: NavParams, private smartFarmCrops: SmartfarmCrops, public alertCtrl: AlertController, public formBuilder: FormBuilder) {
    this.crop = navParams.get('toCreateStage');
  	this.createStageForm = formBuilder.group({
          crop_id: [this.crop._id],
          stage: [''],
          crop_coefficient: ['']
    });
   this.smartfarmCrops = smartFarmCrops;
   this.responseCode = 0;

  }

  saveStage(){
	console.log("saving");
  console.log(this.createStageForm.value);
  	this.smartfarmCrops.save(this.createStageForm.value)
  		.subscribe(data => { this.responseCode = data.status;
                            if(this.responseCode == 201){
                              let alert = this.alertCtrl.create({
	                            title: 'Success!',
	                            subTitle: 'Stage has been added.',
	                            buttons: ['OK']
	                            });
	                            alert.present();
                              this.navCtrl.pop();
                            } 
                          },
  							error => { console.log("something Went Wrong") } 
  					);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateStage');
  }

}
