import { Component } from '@angular/core';
import { Stage } from '../../models/stage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SmartfarmCrops } from '../../providers/smartfarm-crops';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EditStage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-stage',
  templateUrl: 'edit-stage.html',
})
export class EditStagePage {

  editStageForm: FormGroup;
	smartfarmCrops: SmartfarmCrops;
	responseCode;
  stage: Stage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private smartFarmCrops: SmartfarmCrops, public alertCtrl: AlertController) {
    this.stage = navParams.get('toEditStage');
  	this.editStageForm = formBuilder.group({
        stage: [this.stage.stage],
        crop_coefficient: [this.stage.crop_coefficient],
    });
   this.smartfarmCrops = smartFarmCrops;
   this.responseCode = 0;
}

  update(){
	console.log("Updating");
  	console.log(this.editStageForm.value);
  	this.smartfarmCrops.updateStage(this.editStageForm.value, this.stage._id)
  		.subscribe(data => {	
  								this.responseCode = data.status;
  								if(this.responseCode == 200){
  										    let alert = this.alertCtrl.create({
	                        title: 'Success!',
	                        subTitle: 'Stage has been Updated.',
	                        buttons: ['OK']
	                         });
	                  alert.present();
  									this.navCtrl.pop();
  								}
  							 },
  							error => { console.log("something Went Wrong") } 
  					);
  	  }

  deleteStage(toDeleteStage: Stage){
    console.log(toDeleteStage);
    this.smartfarmCrops.deleteStage(toDeleteStage._id)
      .subscribe(data => {  
                  this.responseCode = data.status;
                  if(this.responseCode == 200){
                    let alert = this.alertCtrl.create({
	                        title: 'Success!',
	                        subTitle: 'Stage has been Deleted.',
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
    console.log('ionViewDidLoad EditStage');
  }

}
