import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CreateStagePage } from './create-stage';

@NgModule({
  declarations: [
    CreateStagePage,
  ],
  imports: [
    IonicModule.forRoot(CreateStagePage),
  ],
  exports: [
    CreateStagePage
  ]
})
export class CreateStageModule {}
