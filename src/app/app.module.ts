import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { UsersPage } from '../pages/users/users';
import { CropsPage } from '../pages/crops/crops';
import { SensorsPage } from '../pages/sensors/sensors';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { CreateUserPage } from '../pages/create-user/create-user';

import { SmartfarmUsers } from '../providers/smartfarm-users';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    CropsPage,
    SensorsPage,
    UserDetailsPage,
    CreateUserPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    CropsPage,
    SensorsPage,
    UserDetailsPage,
    CreateUserPage
  ],
  providers: [
    SmartfarmUsers,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
