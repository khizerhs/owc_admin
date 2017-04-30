import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SensorDetailsPage } from './sensor-details';

@NgModule({
  declarations: [
    SensorDetailsPage,
  ],
  imports: [
    IonicModule.forRoot(SensorDetailsPage),
  ],
  exports: [
    SensorDetailsPage
  ]
})
export class SensorDetailsModule {}
