import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CropDetailsPage } from './crop-details';

@NgModule({
  declarations: [
    CropDetailsPage,
  ],
  imports: [
    IonicModule.forRoot(CropDetailsPage),
  ],
  exports: [
    CropDetailsPage
  ]
})
export class CropDetailsModule {}
