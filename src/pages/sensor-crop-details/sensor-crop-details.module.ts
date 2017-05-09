import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SensorCropDetailsPage } from './sensor-crop-details';

@NgModule({
  declarations: [
    SensorCropDetailsPage,
  ],
  imports: [
    IonicModule.forRoot(SensorCropDetailsPage),
  ],
  exports: [
    SensorCropDetailsPage
  ]
})
export class SensorCropDetailsModule {}
