import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SensorsPage } from './sensors';

@NgModule({
  declarations: [
    SensorsPage,
  ],
  imports: [
    IonicModule.forRoot(SensorsPage),
  ],
  exports: [
    SensorsPage
  ]
})
export class SensorsModule {}
