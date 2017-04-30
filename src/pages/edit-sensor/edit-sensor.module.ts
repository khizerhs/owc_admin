import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EditSensorPage } from './edit-sensor';

@NgModule({
  declarations: [
    EditSensorPage,
  ],
  imports: [
    IonicModule.forRoot(EditSensorPage),
  ],
  exports: [
    EditSensorPage
  ]
})
export class EditSensorModule {}
