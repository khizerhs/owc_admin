import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EditStagePage } from './edit-stage';

@NgModule({
  declarations: [
    EditStagePage,
  ],
  imports: [
    IonicModule.forRoot(EditStagePage),
  ],
  exports: [
    EditStagePage
  ]
})
export class EditStageModule {}
