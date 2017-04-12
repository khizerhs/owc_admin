import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CreateUserPage } from './create-user';

@NgModule({
  declarations: [
    CreateUserPage,
  ],
  imports: [
    IonicModule.forRoot(CreateUserPage),
  ],
  exports: [
    CreateUserPage
  ]
})
export class CreateUserModule {}
