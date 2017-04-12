import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CropsPage } from './crops';

@NgModule({
  declarations: [
    CropsPage,
  ],
  imports: [
    IonicModule.forRoot(CropsPage),
  ],
  exports: [
    CropsPage
  ]
})
export class CropsModule {}
