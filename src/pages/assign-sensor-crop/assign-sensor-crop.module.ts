import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AssignSensorCropPage } from './assign-sensor-crop';

@NgModule({
  declarations: [
    AssignSensorCropPage,
  ],
  imports: [
    IonicModule.forRoot(AssignSensorCropPage),
  ],
  exports: [
    AssignSensorCropPage
  ]
})
export class AssignSensorCropModule {}
