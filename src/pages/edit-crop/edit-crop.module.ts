import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EditCropPage } from './edit-crop';


@NgModule({
  declarations: [
    EditCropPage,
  ],
  imports: [
    IonicModule.forRoot(EditCropPage),
  ],
  exports: [
    EditCropPage
  ]
})
export class EditCropModule {}
