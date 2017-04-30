import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CreateCropPage } from './create-crop';

@NgModule({
  declarations: [
    CreateCropPage,
  ],
  imports: [
    IonicModule.forRoot(CreateCropPage),
  ],
  exports: [
    CreateCropPage
  ]
})
export class CreateCropModule {}
