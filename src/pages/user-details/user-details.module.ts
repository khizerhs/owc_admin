import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserDetailsPage } from './user-details';

@NgModule({
  declarations: [
    UserDetailsPage,
  ],
  imports: [
    IonicModule.forRoot(UserDetailsPage),
  ],
  exports: [
    UserDetailsPage
  ]
})
export class UserDetailsModule {}
