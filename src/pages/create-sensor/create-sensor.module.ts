import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CreateSensorPage } from './create-sensor';

@NgModule({
  declarations: [
    CreateSensorPage,
  ],
  imports: [
    IonicModule.forRoot(CreateSensorPage),
  ],
  exports: [
    CreateSensorPage
  ]
})
export class CreateSensorModule {}
