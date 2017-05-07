import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SensorCropPage } from './sensor-crop';

@NgModule({
  declarations: [
    SensorCropPage,
  ],
  imports: [
    IonicModule.forRoot(SensorCropPage),
  ],
  exports: [
    SensorCropPage
  ]
})
export class SensorCropModule {}
