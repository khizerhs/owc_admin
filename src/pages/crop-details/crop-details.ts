import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Crop } from '../../models/crop';
import { EditCropPage } from '../edit-crop/edit-crop';
import { SmartfarmCrops } from '../../providers/smartfarm-crops';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CropDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-crop-details',
  templateUrl: 'crop-details.html',
})
export class CropDetailsPage {

	crop: Crop;
  smartfarmCrops: SmartfarmCrops;
  responseCode;

  constructor(public navCtrl: NavController, public navParams: NavParams, private smartFarmCrops: SmartfarmCrops, public alertCtrl: AlertController) {
  	this.crop = navParams.get('crop');
    this.smartfarmCrops = smartFarmCrops;
    this.responseCode = 0;
  }

  goToEdit(toEditCrop: Crop){
    console.log('Will go to edit page');
    this.navCtrl.push(EditCropPage,{ toEditCrop});
  }

  deleteCrop(toDeleteCrop: Crop){
    console.log(toDeleteCrop);
    this.smartfarmCrops.delete(toDeleteCrop._id)
      .subscribe(data => {  
                  this.responseCode = data.status;
                  if(this.responseCode == 200){
                    this.showDeleteSuccessAlert();
                    this.navCtrl.pop();
                  }
                 },
                error => { console.log("something Went Wrong") } 
            );
      }

  showDeleteSuccessAlert() {  
      let alert = this.alertCtrl.create({
        title: 'Success!',
        subTitle: 'Crop has been Deleted.',
        buttons: ['OK']
      });
      alert.present();
    }

}
